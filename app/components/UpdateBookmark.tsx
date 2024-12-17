"use client";

import { useActionState } from "react";
import { State, updateBookmark } from "../lib/actions";

type Bookmark = {
  id: string;
  title: string;
  url: string;
  description: string;
  favicon?: string;
};

const UpdateBookmark = ({
  bookmark,
  id,
}: {
  bookmark: Bookmark;
  id: string;
}) => {
  const initialState: State = { message: null, errors: {} };
  const boundUpdateBookmark = updateBookmark.bind(null, id);

  const [state, formAction] = useActionState(boundUpdateBookmark, initialState);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Bookmark</h1>

      {state.message && (
        <div
          className={`p-2 mb-4 text-sm ${
            state.message.includes("success")
              ? "text-green-700 bg-green-100"
              : "text-red-700 bg-red-100"
          } rounded`}
        >
          {state.message}
        </div>
      )}

      <form action={formAction}>
        <input type="hidden" name="id" value={bookmark.id} />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={bookmark.title}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              state.errors?.title ? "border-red-500" : ""
            }`}
          />
          {state.errors?.title && (
            <div className="text-red-500 text-xs mt-1">
              {state.errors.title}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="url"
            name="url"
            defaultValue={bookmark.url}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              state.errors?.url ? "border-red-500" : ""
            }`}
          />
          {state.errors?.url && (
            <div className="text-red-500 text-xs mt-1">{state.errors.url}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={bookmark.description}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Favicon
          </label>
          <input
            type="text"
            name="favicon"
            defaultValue={bookmark.favicon || ""}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateBookmark;
