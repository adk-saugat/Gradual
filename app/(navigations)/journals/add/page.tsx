export default function AddJournal() {
  return (
    <div className="pt-4 flex flex-col gap-6">
      <div className="text-3xl font-semibold text-gray-600 border-b-2 pb-2">
        Add Journal
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          required
          placeholder="Enter title"
          className="text-xl bg-white"
        />
        <textarea
          name="content"
          required
          placeholder="Enter content"
          className="text-xl bg-white p-2 px-4 resize-none border rounded-md"
          style={{ height: "240px" }}
        />
        <button
          type="submit"
          className="bg-blue-500 p-4 rounded-md text-xl font-medium text-white hover:bg-blue-400 cursor-pointer"
        >
          Add Journal
        </button>
      </form>
    </div>
  );
}
