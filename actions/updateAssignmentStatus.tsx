"use server";
import connectDB from "@/config/database";
import Assignment from "@/models/Assignment";
import { revalidatePath } from "next/cache";
import { getSessionUser } from "@/utils/getSessionUser";

export async function updateAssignmentStatus(
  id: string,
  completed: boolean
): Promise<void> {
  connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  // Find and update the assignment
  const assignment = await Assignment.findById(id);

  if (!assignment) {
    throw new Error("Assignment not found!");
  }

  // Check if the user owns this assignment
  if (assignment.owner.toString() !== sessionUser.userId) {
    throw new Error("Unauthorized to update this assignment!");
  }

  // Update the completed status
  assignment.completed = completed;
  await assignment.save();

  // Revalidate the assignments page to show updated data
  revalidatePath("/assignments");
}
