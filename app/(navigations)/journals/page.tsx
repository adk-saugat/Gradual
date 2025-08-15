import AddButton from "../AddButton";

export default function Journals() {
  const journals = [
    {
      id: 1,
      title: "Learn React",
      content: "lorem ipsum lorem ipsum",
      date: {
        month: "Aug",
        date: "28",
        year: "2025",
      },
    },
    {
      id: 2,
      title: "Do leetcode and apply!",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      date: {
        month: "Sep",
        date: "02",
        year: "2025",
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input type="text" placeholder="Search Journals..." />
      </form>
      <AddButton text="Add Journals" urlLocation="/journals/add" />
      <div>
        {journals &&
          journals.map((journalInfo) => (
            <div
              key={journalInfo.id}
              className="border-b m-0 py-3 flex justify-between px-4 items-center hover:bg-gray-200 rounded-sm hover:scale-105 duration-100"
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
                  {journalInfo.date.month}
                </span>
                <span className="text-xl font-light">
                  {journalInfo.date.date}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
