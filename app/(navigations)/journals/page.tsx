import connectDB from "@/config/database";
import AddButton from "../AddButton";
import JournalCard from "./JournalCard";
import Journal from "@/models/Journal";
import { getSessionUser } from "@/utils/getSessionUser";

interface SerializedJournal {
  _id: string;
  title: string;
  content: string;
  dateInfo: {
    day: number;
    month: string;
    year: number;
  };
  owner: string;
  __v: number;
}

export default async function Journals() {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }

  const journals = await Journal.find({ owner: userId });

  // Convert Mongoose documents to plain objects for client components
  const plainJournals: SerializedJournal[] = JSON.parse(
    JSON.stringify(journals)
  );

  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Journals..." />
      </form>
      <AddButton text="Add Journals" urlLocation="/journals/add" />
      <div>
        {plainJournals && plainJournals.length > 0 ? (
          plainJournals.map((journalInfo) => (
            <JournalCard journalInfo={journalInfo} key={journalInfo._id} />
          ))
        ) : (
          <div className="text-center mt-6 text-lg font-light text-gray-400">
            No Journals added!
          </div>
        )}
      </div>
    </div>
  );
}
