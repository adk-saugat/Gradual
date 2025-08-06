"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { data: session } = useSession();
  const user = session?.user;

  const pathname = usePathname();
  let activePage: string = pathname.slice(1).split("/")[0];
  useEffect(() => {
    activePage = pathname.slice(1).split("/")[0];
  }, [pathname]);

  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <SideBar />
      <h1 className="text-2xl font-semibold capitalize">
        {activePage === "dashboard" ? "Gradual" : activePage}
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-10 h-10 cursor-pointer border-2">
            <AvatarImage src={user?.image ?? undefined} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 text-lg text-gray-600 font-semibold flex gap-1 flex-col">
          <DropdownMenuLabel className="text-xl">
            {user?.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer font-semibold">
            <CgProfile className="inline mr-2 scale-130" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-semibold"
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            <FaSignOutAlt className="inline mr-2 scale-130" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
