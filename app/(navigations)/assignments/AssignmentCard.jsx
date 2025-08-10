import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

export default function AssignmentCard({ assignment }) {
  const { title, description, status, dueDate } = assignment;

  return (
    <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-1 shadow-sm">
      <span className="flex gap-6 justify-end">
        {/* <FaEdit className="text-gray-600 scale-130 cursor-pointer" /> */}
        <BsThreeDotsVertical className="text-gray-600 scale-130 cursor-pointer" />
      </span>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
        <p className="text-gray-400 text-sm">
          {description.length > 100
            ? description.slice(0, 100).concat("...")
            : description}
        </p>
      </div>
      <div className="flex justify-between text-gray-500 mt-2 font-medium">
        <p className="font-medium flex gap-1 items-center">
          <MdOutlineDateRange size={20} />
          <span className="text-md">
            Due: {dueDate?.month} {dueDate?.date}
          </span>
        </p>
        <p className="bg-yellow-300 px-3 py-2 rounded-md shadow-sm text-sm">
          {status}
        </p>
      </div>
    </div>
  );
}
