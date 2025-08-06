import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

export default function AssignmentCard() {
  const assignmentData = {
    title: "Learn React",
    description: "I have to learn react and create some projects.",
    dueDate: "Aug 2",
    status: "Pending",
  };
  return (
    <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-1 shadow-sm">
      <span className="flex gap-6 justify-end">
        {/* <FaEdit className="text-gray-600 scale-130 cursor-pointer" /> */}
        <BsThreeDotsVertical className="text-gray-600 scale-130 cursor-pointer" />
      </span>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700">
          {assignmentData.title}
        </h1>
        <p className="text-gray-400 text-md">{assignmentData.title}</p>
      </div>
      <div className="flex justify-between text-gray-500 mt-2 font-medium">
        <p className="font-medium flex gap-1 items-center">
          <MdOutlineDateRange size={20} />
          <span className="text-lg">Due: {assignmentData.dueDate}</span>
        </p>
        <p className="bg-yellow-300 px-3 py-2 rounded-md shadow-sm">
          {assignmentData.status}
        </p>
      </div>
    </div>
  );
}
