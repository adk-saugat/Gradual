"use server";

import connectDB from "@/config/database";
import Journal from "@/models/Journal";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function createJournal(formData: FormData): Promise<void> {
  connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  const { userId } = sessionUser;

  const title = formData.get("title");
  const content = formData.get("content");

  // Type guard to ensure all required fields exist
  if (!title || !content) {
    throw new Error("All fields are required");
  }
  const date = new Date();
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

  const journalData = {
    title,
    content,
    dateInfo: {
      day: date.getDay(),
      month: monthNames[date.getMonth()],
      year: date.getFullYear(),
    },
    owner: userId,
  };

  await Journal.create(journalData);
  revalidatePath("/journals");
  redirect("/journals");
}
