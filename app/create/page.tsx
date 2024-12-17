"use client";
import React, { useActionState } from "react";
import { createBookmark, State } from "../lib/actions";

export default function CreateBookmark() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createBookmark, initialState);

  return (
    <div>
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
            <div className="text-red-500 text-xs mt-1">{state.errors.url}</div>
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

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Bookmark
        </button>
      </form>
    </div>
  );
}
