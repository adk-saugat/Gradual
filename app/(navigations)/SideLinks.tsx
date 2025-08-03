import { GoHomeFill } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import { IoIosJournal } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export default function SideLinks() {
  return (
    <ul className="space-y-4 mt-10 flex flex-col ml-6">
      <li className="flex items-center  space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        <GoHomeFill className="text-lg" />
        <span className="text-lg font-medium">Dashboard</span>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        <MdAssignment className="text-lg" />
        <span className="text-lg font-medium">Assignments</span>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        <IoIosJournal className="text-lg" />
        <span className="text-lg font-medium">Journals</span>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        <FaProjectDiagram className="text-lg" />
        <span className="text-lg font-medium">Projects</span>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        <IoIosSettings className="text-lg" />
        <span className="text-lg font-medium">Settings</span>
      </li>
    </ul>
  );
}
