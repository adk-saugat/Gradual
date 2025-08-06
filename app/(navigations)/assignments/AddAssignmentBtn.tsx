"use client";

import { redirect } from "next/navigation";
import { IoMdAdd } from "react-icons/io";

export default function AddAssignmentBtn() {
  return (
    <div
      onClick={() => {
        redirect("/assignments/add");
      }}
      className="bg-gray-100 rounded-md p-3 flex justify-center item-center gap-1 shadow-sm cursor-pointer hover:scale-105 duration-100"
    >
      <IoMdAdd className="text-gray-500" size={25} />
      <span className="text-lg text-gray-500">Add Assignment</span>
    </div>
  );
}
