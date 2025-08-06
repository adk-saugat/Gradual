import { DatePicker } from "./DatePicker";
import { StatusButton } from "./StatusButton";
export default function AddAssignment() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="text-3xl font-medium text-gray-600 border-b-2 pb-2">
        Add Assignment
      </div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Enter title" className="text-xl" />
        <input
          type="text"
          placeholder="Enter description"
          className="text-xl"
        />
        <div className="flex gap-2">
          <DatePicker />
          <StatusButton />
        </div>
      </form>
    </div>
  );
}
