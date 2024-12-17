import UpdateBookmark from "@/app/components/UpdateBookmark";
import { getBookmarkById } from "@/app/lib/actions";

export default async function EditBookmark({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).id;

  const bookmark = await getBookmarkById(slug);

  if (!bookmark) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Bookmark Not Found</h1>
        <p>The bookmark with the provided ID does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Bookmark</h1>
      <UpdateBookmark bookmark={bookmark} id={slug}></UpdateBookmark>
    </div>
  );
}
