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
        <DropdownMenuContent className="mr-2 text-lg text-gray-600">
          <DropdownMenuLabel className="text-lg font-semibold">
            Sau Gat
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="font-medium cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="font-medium cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
