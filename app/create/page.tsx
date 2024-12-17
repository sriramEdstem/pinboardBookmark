"use client";
import React, { useActionState, useState } from "react";
import { createBookmark, State } from "../lib/actions";

export default function CreateBookmark() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createBookmark, initialState);

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string>("");

  const collections = ["Test1", "Test2", "Test3", "Test4", "Test5"];

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((item) => item !== tag));
  };

  const handleCollectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollection(e.target.value);
  };
  return (
    <div className="min-h-screen flex items-center w-[100%] justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Create a Bookmark
        </h2>
        <form action={formAction}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                state?.errors?.title ? "border-red-500" : ""
              }`}
              id="title"
              type="text"
              name="title"
            />
            {state?.errors?.title && (
              <div className="text-red-500 text-xs mt-1">
                {state.errors.title}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              URL
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                state?.errors?.url ? "border-red-500" : ""
              }`}
              id="url"
              type="text"
              name="url"
            />
            {state?.errors?.url && (
              <div className="text-red-500 text-xs mt-1">
                {state.errors.url}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                state?.errors?.description ? "border-red-500" : ""
              }`}
              id="description"
              name="description"
            />
            {state?.errors?.description && (
              <div className="text-red-500 text-xs mt-1">
                {state.errors.description}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="favicon"
            >
              Favicon
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                state?.errors?.favicon ? "border-red-500" : ""
              }`}
              id="favicon"
              type="text"
              name="favicon"
            />
            {state?.errors?.favicon && (
              <div className="text-red-500 text-xs mt-1">
                {state.errors.favicon}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tags"
            >
              Tags
            </label>
            <div className="flex items-center mb-2">
              <input
                className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tags"
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full mr-2 mb-2 flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="collection"
            >
              Collection
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="collection"
              name="collection"
              value={selectedCollection}
              onChange={handleCollectionChange}
            >
              <option value="">Select a collection</option>
              {collections.map((collection) => (
                <option key={collection} value={collection}>
                  {collection}
                </option>
              ))}
            </select>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Create Bookmark
          </button>
        </form>
      </div>
    </div>
  );
}
