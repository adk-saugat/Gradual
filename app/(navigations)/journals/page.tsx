import connectDB from "@/config/database";
import AddButton from "../AddButton";
import JournalCard from "./JournalCard";
import Journal from "@/models/Journal";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function Journals() {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }

  const journals = await Journal.find({ owner: userId });

  // const plainAssignments = JSON.parse(JSON.stringify(assignments));
  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Journals..." />
      </form>
      <AddButton text="Add Journals" urlLocation="/journals/add" />
      <div>
        {journals &&
          journals.map((journalInfo) => (
            <JournalCard journalInfo={journalInfo} key={journalInfo.id} />
          ))}
      </div>
    </div>
  );
}
