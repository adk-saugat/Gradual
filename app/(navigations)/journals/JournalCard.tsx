"use client";
import deleteJournal from "@/actions/deleteJournal";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

interface JournalInfo {
  _id: string;
  title: string;
  content: string;
  dateInfo: {
    day: number;
    month: string;
    year: number;
  };
}

export default function JournalCard({
  journalInfo,
}: {
  journalInfo: JournalInfo;
}) {
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  const handleJournalOpen = () => {
    setIsJournalOpen((prevIsJournalOpen) => !prevIsJournalOpen);
  };

  const handleDeleteJournal = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this journal?"
    );
    if (!confirm) return;
    await deleteJournal(id);
  };

  return (
    <div
      onClick={handleJournalOpen}
      className="transition-100 border-b m-0 py-3 cursor-pointer flex justify-between px-4 items-center hover:bg-gray-200 rounded-sm hover:scale-105 duration-100"
    >
      <div className="flex flex-col">
        <span className="text-xl">{journalInfo.title}</span>
        <span className="text-sm text-gray-400">
          {!isJournalOpen
            ? journalInfo.content.slice(0, 40).trim().concat("...")
            : journalInfo.content}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold">
            {journalInfo.dateInfo.month}
          </span>
          <span className="text-xl font-light">{journalInfo.dateInfo.day}</span>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isJournalOpen ? "opacity-100" : "hidden"
          }`}
        >
          <MdDelete
            className="text-red-500"
            size={30}
            onClick={() => handleDeleteJournal(journalInfo._id)}
          />
        </div>
      </div>
    </div>
  );
}
