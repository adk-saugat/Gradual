import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideLinks from "./SideLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isAddPage =
    pathname === "/assignments/add" ||
    pathname === "/journals/add" ||
    pathname === "/projects/add";

  const getBackPath = () => {
    if (pathname.includes("/assignments")) return "/assignments";
    if (pathname.includes("/journals")) return "/journals";
    if (pathname.includes("/projects")) return "/projects";
    return "/dashboard";
  };

  return (
    <>
      {isAddPage ? (
        <IoMdArrowRoundBack
          size={25}
          className="cursor-pointer scale-120"
          onClick={() => router.push(getBackPath())}
        />
      ) : (
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
          <SheetTrigger>
            <GiHamburgerMenu className="text-2xl cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader className="mt-10">
              <SheetTitle className="text-3xl font-semibold text-gray-700">
                Gradual
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-500">
                Navigate through the dashboard
              </SheetDescription>
            </SheetHeader>
            <SideLinks />
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
