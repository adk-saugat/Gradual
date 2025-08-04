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
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
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
  );
}
