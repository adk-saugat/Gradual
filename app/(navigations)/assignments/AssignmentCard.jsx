import { MdOutlineDateRange } from "react-icons/md";
import CheckBox from "./CheckBox";

export default function AssignmentCard({ assignment }) {
  const { title, description, completed, dueDate, id } = assignment;

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
        <CheckBox completed={completed} id={id} />
      </div>
    </div>
  );
}
