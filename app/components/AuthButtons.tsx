"use client";

import { signIn, signOut } from "next-auth/react";

export function AuthButtons({ isSignedIn }: { isSignedIn: boolean }) {
  return isSignedIn ? (
    <button
      onClick={() => signOut()}
      className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Sign Out
    </button>
  ) : (
    <div className="flex items-center  gap-4">
      <div>
        <button
          onClick={() => signIn()}
          className="w-full py-2  px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
      <div>
        <button
          onClick={() => signIn(undefined, { callbackUrl: "/signup" })}
          className="w-full py-2 px-4  bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
