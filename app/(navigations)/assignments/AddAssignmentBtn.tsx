"use client";

import { redirect } from "next/navigation";
import { IoMdAdd } from "react-icons/io";

export default function AddAssignmentBtn() {
  return (
    <div
      onClick={() => {
        redirect("/assignments/add");
      }}
      className="bg-blue-100 rounded-md p-3 flex justify-center item-center gap-1 cursor-pointer hover:scale-105 duration-100"
    >
      <IoMdAdd className="text-blue-500" size={25} />
      <span className="text-lg text-blue-500 font-medium">Add Assignment</span>
    </div>
  );
}
