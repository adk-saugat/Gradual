"use client";

import { MdOutlineDateRange } from "react-icons/md";
import CheckBox from "./CheckBox";
import { MdDelete } from "react-icons/md";
import deleteAssignment from "@/actions/deleteAssignment";

export default function AssignmentCard({ assignment }) {
  const { title, description, completed, dueDate, _id } = assignment;

  const handledeleteAssignment = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (!confirm) return;
    await deleteAssignment(id);
  };

  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-1 shadow-sm">
      <div className="flex flex-col gap-2">
        <h1
          className={`text-2xl font-medium text-gray-700 ${
            completed === true && "line-through"
          }`}
        >
          {title}
        </h1>
        <p className="text-gray-400 text-sm">
          {description.length > 100
            ? description.slice(0, 100).concat("...")
            : description}
        </p>
      </div>
      <div className="flex justify-between text-gray-500 mt-2 font-medium">
        <p className="font-medium flex gap-1 items-center">
          <MdOutlineDateRange size={20} />
          <span className="text-sm">
            Due: {dueDate?.month} {dueDate?.date}
          </span>
        </p>
        <div className="flex gap-2">
          <MdDelete
            size={25}
            className="text-red-500 cursor-pointer hover:scale-105"
            onClick={() => handledeleteAssignment(_id)}
          />
          <CheckBox completed={completed} id={_id} />
        </div>
      </div>
    </div>
  );
}
