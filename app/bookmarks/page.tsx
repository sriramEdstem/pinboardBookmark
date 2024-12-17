import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBookmarks } from "../lib/actions";
import Image from "next/image";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default async function Bookmarks() {
  const bookmarks = await getBookmarks();
  return (
    <div className="flex-col items-center w-[100%] justify-center">
      <h1 className="text-3xl font-bold mb-4">Bookmarks</h1>
      <Table>
        <TableCaption>A list of your bookmarks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(bookmarks) &&
            bookmarks.map((bookmark, index) => (
              <TableRow key={bookmark.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{bookmark.title}</TableCell>
                <TableCell>{bookmark.description}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div>
                      <img
                        rel="icon"
                        src={bookmark.favicon}
                        style={{ width: "55%" }}
                      />
                    </div>
                    <div>
                      <a
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {bookmark.url}
                      </a>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="ml-auto flex">
                    <Link
                      href={`/create/edit/${encodeURIComponent(bookmark.id)}`}
                    >
                      <button className="text-blue-500 hover:text-blue-700 mr-2">
                        <Pencil2Icon />
                      </button>
                    </Link>

                    <button className="text-red-500 hover:text-red-700">
                      <TrashIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
