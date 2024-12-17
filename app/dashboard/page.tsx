import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get user session server-side
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Bookmarks</h2>
        </div>
        <div className="space-y-2">
          <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/bookmarks" className="block py-2 px-4 hover:bg-gray-700">
            My Bookmarks
          </Link>
          <Link
            href="/create-bookmark"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Add Bookmark
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          {session?.user ? (
            <div className="flex items-center space-x-2">
              <img
                src={session.user.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{session.user.name}</span>
            </div>
          ) : (
            <Link href="/auth/signin" className="text-blue-600">
              Sign In
            </Link>
          )}
        </header>

        {/* Main Dashboard Content */}
        <div className="bg-white p-4 rounded-lg shadow-md">{children}</div>
      </div>
    </div>
  );
}
