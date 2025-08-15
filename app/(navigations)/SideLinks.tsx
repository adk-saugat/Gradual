import { GoHomeFill } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import { IoIosJournal } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";

export default function SideLinks() {
  return (
    <ul className="space-y-4 mt-10 flex flex-col ml-6">
      <Link
        href="/dashboard"
        className="flex items-center  space-x-2 cursor-pointer hover:bg-gray-200 p-3 rounded"
      >
        <GoHomeFill className="text-lg" />
        <span className="text-lg font-medium">Home</span>
      </Link>
      <Link
        href="/assignments"
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-3 rounded"
      >
        <MdAssignment className="text-lg" />
        <span className="text-lg font-medium">Assignments</span>
      </Link>
      <Link
        href="/journals"
        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-3 rounded"
      >
        <IoIosJournal className="text-lg" />
        <span className="text-lg font-medium">Journals</span>
      </Link>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-3 rounded">
        <FaProjectDiagram className="text-lg" />
        <span className="text-lg font-medium">Projects</span>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-3 rounded">
        <IoIosSettings className="text-lg" />
        <span className="text-lg font-medium">Settings</span>
      </li>
    </ul>
  );
}
