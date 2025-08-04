import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

export default function AssignmentPage() {
  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Assignments..." />
      </form>

      <div className="bg-gray-100 rounded-md p-3 flex justify-center item-center gap-1 shadow-sm cursor-pointer hover:scale-105 duration-100">
        <IoMdAdd className="text-gray-500" size={25} />
        <span className="text-lg text-gray-500">Add Assignment</span>
      </div>

      {/* Example assignment card */}
      <div className="bg-gray-100 rounded-md p-3 flex flex-col gap-1 shadow-sm">
        <span className="flex gap-6 justify-end">
          <FaEdit className="text-gray-600 scale-130 cursor-pointer" />
          <BsThreeDotsVertical className="text-gray-600 scale-130 cursor-pointer" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold text-gray-700">Learn React </h1>
          <p className="text-gray-400 text-md">No assignments found.</p>
        </div>
        <div className="flex justify-between text-gray-500 mt-2 font-medium">
          <p className="font-medium flex gap-1 items-center">
            <MdOutlineDateRange size={20} />
            <span className="text-lg">Due: Aug 2</span>
          </p>
          <p className="bg-yellow-300 px-3 py-2 rounded-md shadow-sm">
            Pending
          </p>
        </div>
      </div>
    </div>
  );
}
