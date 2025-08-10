import connectDB from "@/config/database";
import AddAssignmentBtn from "./AddAssignmentBtn";
import AssignmentCard from "./AssignmentCard";
import { getSessionUser } from "@/utils/getSessionUser";
import Assignment from "@/models/Assignment";

export default async function AssignmentPage() {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }
  console.log(userId);

  const assignments = await Assignment.find({ owner: userId });
  console.log(assignments);

  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Assignments..." />
      </form>

      <AddAssignmentBtn />

      {/* Example assignment card */}
      {assignments &&
        assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
    </div>
  );
}
