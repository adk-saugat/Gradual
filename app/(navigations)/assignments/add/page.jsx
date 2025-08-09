import StatusButton from "./StatusButton";
import { createUser } from "@/lib/actions";

export default function AddAssignment() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="text-3xl font-medium text-gray-600 border-b-2 pb-2">
        Add Assignment
      </div>
      <form className="flex flex-col gap-4" action={createUser}>
        <input
          type="text"
          name="title"
          required
          placeholder="Enter title"
          className="text-xl"
        />
        <input
          type="text"
          name="description"
          required
          placeholder="Enter description"
          className="text-xl"
        />
        <input
          type="date"
          name="dueDate"
          required
          className="text-lg text-gray-500"
        />
        <StatusButton />
        <button
          type="submit"
          className="bg-blue-500 p-4 rounded-md text-xl font-medium text-white hover:bg-blue-400 cursor-pointer"
        >
          Add Assignment
        </button>
      </form>
    </div>
  );
}
