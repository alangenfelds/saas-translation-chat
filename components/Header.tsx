import { getServerSession } from "next-auth/next";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import { authOptions } from "@/auth";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl flex-col items-center bg-white p-5 pl-2 dark:bg-gray-900 sm:flex-row">
        <Logo />

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Language Select */}

          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>

              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing" prefetch={false}>
              Pricing
            </Link>
          )}

          <DarkModeToggle />

          <UserButton session={session} />
        </div>
      </nav>
      {/* Upgrade to PRO banner */}
    </header>
  );
};

export default Header;
