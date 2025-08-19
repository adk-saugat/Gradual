import connectDB from "@/config/database";
import AssignmentCard from "./AssignmentCard";
import { getSessionUser } from "@/utils/getSessionUser";
import Assignment from "@/models/Assignment";
import AddButton from "../AddButton";

export default async function AssignmentPage() {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }

  const assignments = await Assignment.find({ owner: userId });

  // Convert Mongoose documents to plain objects for client components
  const plainAssignments = JSON.parse(JSON.stringify(assignments));

  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Assignments..." />
      </form>

      <AddButton text="Add Assigments" urlLocation="/assignments/add" />

      {/* Example assignment card */}
      {Array.isArray(plainAssignments) && plainAssignments.length > 0 ? (
        plainAssignments.map((assignment: any) => (
          <AssignmentCard key={assignment._id} assignment={assignment} />
        ))
      ) : (
        <div className="text-center mt-6 text-lg font-light text-gray-400">
          No Assignments added!
        </div>
      )}
    </div>
  );
}
