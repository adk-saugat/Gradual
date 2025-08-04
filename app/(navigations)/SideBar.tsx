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

export default function SideBar() {
  return (
    <Sheet>
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
