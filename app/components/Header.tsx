import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../lib/auth";
import { AuthButtons } from "./AuthButtons";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className=" bg-gray-50 text-black p-4 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Pinboard</h1>
      </div>
      <div>
        {session?.user ? (
          <div className=" flex gap-6 items-center justify-end">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <span className="font-bold">{session.user.name}</span>
            <div>
              <AuthButtons isSignedIn={!!session} />
            </div>
          </div>
        ) : (
          <div className="mt-auto p-4 ">
            <AuthButtons isSignedIn={!!session} />
          </div>
        )}
      </div>
    </header>
  );
}
