"use client";

import { useState } from "react";

export default function StatusButton() {
  const [status, setStatus] = useState("not_started");

  return (
    <div className="flex flex-col gap-4">
      <label className="text-2xl pl-2 font-semibold text-gray-600">
        Status
      </label>
      <div className="flex flex-col gap-3 ml-4 text-gray-600">
        <span className="flex gap-2 items-center">
          <input
            type="radio"
            name="status"
            value="not_started"
            checked={status === "not_started"}
            onChange={(e) => setStatus(e.target.value)}
            className="w-6 h-6"
          />
          <label className="text-lg font-medium">Not Started</label>
        </span>
        <span className="flex gap-2 items-center">
          <input
            type="radio"
            name="status"
            value="in_progress"
            checked={status === "in_progress"}
            onChange={(e) => setStatus(e.target.value)}
            className="w-6 h-6"
          />
          <label className="text-lg font-medium">In Progress</label>
        </span>
        <span className="flex gap-2 items-center">
          <input
            type="radio"
            name="status"
            value="completed"
            checked={status === "completed"}
            onChange={(e) => setStatus(e.target.value)}
            className="w-6 h-6"
          />
          <label className="text-lg font-medium">Completed</label>
        </span>
      </div>
    </div>
  );
}
