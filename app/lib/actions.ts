"use server";
import ogs from "open-graph-scraper";
import { redirect } from "next/navigation";
// import { revalidatePath } from 'next/cache'
import { z } from "zod";
import prisma from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
export type State = {
  message?: string | null;
  errors?: {
    title?: string[];
    url?: string[];
    description?: string[];
    favicon?: string[];
  };
};

const createBookmarkSchema = z.object({
  title: z.string().nonempty("Please enter a title."),
  url: z.string().nonempty("Please enter a URL."),
  description: z.string().optional(),
  favicon: z.string().optional(),
  tags: z.array(z.string()).optional(),
  collectionId: z.string().optional(),
});

export async function createBookmark(prevState: State, formData: FormData) {
  const validatedFields = createBookmarkSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create employee.",
    };
  }
  let favicon = null;
  try {
    const ogsResult = await ogs({ url: validatedFields.data.url });
    const { result } = ogsResult;

    if (result?.success) {
      favicon = result.favicon;
    } else {
      console.warn("OGS Error: Failed to fetch Open Graph data.");
    }
  } catch (error) {
    console.error("OGS Error:", error);
  }

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { message: "User not authenticated." };
    }
    await prisma.bookmark.create({
      data: {
        title: validatedFields.data.title,
        url: validatedFields.data.url,
        description: validatedFields.data.description,
        favicon: favicon || validatedFields.data.favicon,
        userId: session.user.id,
        tags: [],
        collectionId: validatedFields.data.collectionId || null,
      },
    });
    return { message: "Bookmark created successfully." };
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to create bookmark." };
  }
}
export async function getBookmarkById(id: string) {
  try {
    const bookmark = await prisma.bookmark.findUnique({
      where: {
        id,
      },
    });
    return bookmark;
  } catch (error) {
    console.error("Failed to fetch bookmark:", error);
    return null;
  }
}
export const getBookmarks = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { message: "User not authenticated." };
    }

    const bookmarks = await prisma.bookmark.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
        title: true,
        url: true,
        description: true,
        favicon: true,
        userId: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return bookmarks;
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to retrieve bookmarks." };
  }
};

export async function updateBookmark(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = createBookmarkSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to update bookmark.",
    };
  }

  try {
    const updatedBookmark = await prisma.bookmark.update({
      where: { id },
      data: {
        title: validatedFields.data.title,
        url: validatedFields.data.url,
        description: validatedFields.data.description || null,
        favicon: validatedFields.data.favicon || null,
      },
    });

    return {
      message: "Bookmark updated successfully.",
      updatedBookmark,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to update bookmark.",
    };
  }
}
