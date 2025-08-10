"use server";

import connectDB from "@/config/database";
import Assignment from "@/models/Assignment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";

export async function createAssignment(formData: FormData): Promise<void> {
  connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  const { userId } = sessionUser;

  const title = formData.get("title");
  const description = formData.get("description");
  const dates = formData.get("dueDate")?.toString();
  const status = formData.get("status");

  // Type guard to ensure all required fields exist
  if (!title || !description || !dates || !status) {
    throw new Error("All fields are required");
  }
  const dateArray = dates.split("-");

  const year = dateArray[0];
  const month = dateArray[1];
  const date = dateArray[2];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = monthNames[parseInt(month) - 1];

  const assignmentData = {
    title,
    description,
    dueDate: {
      year: parseInt(year),
      month: monthName,
      date: parseInt(date),
    },
    status,
    owner: userId,
  };

  await Assignment.create(assignmentData);
  revalidatePath("/assignments");
  redirect("/assignments");
}
