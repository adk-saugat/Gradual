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
export default function NavBar() {
  const pathname = usePathname();
  let activePage: String = pathname.slice(1);
  useEffect(() => {
    activePage = pathname.slice(1);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <SideBar />
      <h1 className="text-2xl font-semibold capitalize">
        {activePage === "dashboard" ? "Gradual" : activePage}
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 text-lg text-gray-600 font-semibold flex gap-1 flex-col">
          <DropdownMenuLabel className="text-xl">Sau Gat</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer font-semibold">
            <CgProfile className="inline mr-2 scale-130" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer font-semibold">
            <FaSignOutAlt className="inline mr-2 scale-130" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
