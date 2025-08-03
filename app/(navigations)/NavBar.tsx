import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideLinks from "./SideLinks";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
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
      <h1 className="text-2xl font-semibold">Gradual</h1>
      <Avatar className="w-10 h-10 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
}
