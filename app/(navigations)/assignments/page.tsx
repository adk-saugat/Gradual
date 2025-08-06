import AddAssignmentBtn from "./AddAssignmentBtn";
import AssignmentCard from "./AssignmentCard";

export default function AssignmentPage() {
  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Assignments..." />
      </form>

      <AddAssignmentBtn />

      {/* Example assignment card */}
      <AssignmentCard />
    </div>
  );
}
