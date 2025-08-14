"use server";

import connectDB from "@/config/database";
import Assignment from "@/models/Assignment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function deleteAssignment(assignmentId: string) {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.user || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  const { userId } = sessionUser;

  const assignment = await Assignment.findById(assignmentId);

  if (!assignment) throw new Error("Assignment not found!");

  if (assignment.owner.toString() !== userId) {
    throw new Error("Unauthorized!");
  }

  await Assignment.deleteOne();
  revalidatePath("/assignments");
}
