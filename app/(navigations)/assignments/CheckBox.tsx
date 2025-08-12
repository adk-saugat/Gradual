"use client";

import { updateAssignmentStatus } from "@/actions/updateAssignmentStatus";
import { useState } from "react";

function CheckBox({ completed, id }: { completed: boolean; id: string }) {
  const [isChecked, setIsChecked] = useState(completed);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChecked = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    setIsUpdating(true);

    try {
      await updateAssignmentStatus(id, newValue);
    } catch (error) {
      // Revert the checkbox if the update failed
      setIsChecked(completed);
      console.error("Failed to update assignment status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleChecked}
      disabled={isUpdating}
      className="accent-blue-500 w-6 h-6 cursor-pointer disabled:opacity-50"
    />
  );
}

export default CheckBox;
