"use server";
import ogs from "open-graph-scraper";

import { z } from "zod";
import prisma from "./prisma";
export type State = {
  message?: string | null;
  errors?: {
    title?: string[];
    url?: string[];
    description?: string[];
    favicon?: string[];
    userId?: string[];
  };
};

const createEmployeeSchema = z.object({
  title: z.string().nonempty("Please enter a title."),
  url: z.string().nonempty("Please enter a URL."),
  description: z.string().optional(),
  favicon: z.string().optional(),
  userId: z.string().nonempty("Please enter a user ID."),
});

export async function createBookmark(prevState: State, formData: FormData) {
  const validatedFields = createEmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create employee.",
    };
  }
  let favicon = null;
  await ogs({ url: validatedFields.data.url }).then((data: { result: any }) => {
    const { result } = data;
    console.log(result.success, "result");
    if (result.success == true) {
      favicon = result.favicon;
    }
  });
  try {
    await prisma.bookmark.create({
      data: {
        title: validatedFields.data.title,
        url: validatedFields.data.url,
        description: validatedFields.data.description,
        favicon: favicon ? favicon : validatedFields.data.favicon,
        userId: validatedFields.data.userId,
      },
    });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to create employee." };
  }
}

export const getBookmarks = async () => {
  try {
    const bookmarks = await prisma.bookmark.findMany({
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
    return { message: "Database Error: Failed to create employee." };
  }
};
