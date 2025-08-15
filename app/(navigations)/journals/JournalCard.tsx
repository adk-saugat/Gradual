interface JournalInfo {
  id: string | number;
  title: string;
  content: string;
  dateInfo: {
    day: string;
    month: string;
    year: string;
  };
}

export default function JournalCard({
  journalInfo,
}: {
  journalInfo: JournalInfo;
}) {
  return (
    <div
      key={journalInfo.id}
      className="border-b m-0 py-3 cursor-pointer flex justify-between px-4 items-center hover:bg-gray-200 rounded-sm hover:scale-105 duration-100"
    >
      <div className="flex flex-col">
        <span className="text-xl">{journalInfo.title}</span>
        <span className="text-sm text-gray-400">
          {journalInfo.content.length > 40
            ? journalInfo.content.slice(0, 40).trim().concat("...")
            : journalInfo.content}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold">
          {journalInfo.dateInfo.month}
        </span>
        <span className="text-xl font-light">{journalInfo.dateInfo.day}</span>
      </div>
    </div>
  );
}
