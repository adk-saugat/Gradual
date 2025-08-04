"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
      <Avatar className="w-10 h-10 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
}
