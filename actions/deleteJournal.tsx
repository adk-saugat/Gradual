"use server";

import connectDB from "@/config/database";
import Journal from "@/models/Journal";
import { revalidatePath } from "next/cache";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function deleteJournal(journalId: string) {
  connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.user || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  const { userId } = sessionUser;

  const journal = await Journal.findById(journalId);

  if (!journal) throw new Error("Assignment not found!");

  if (journal.owner.toString() !== userId) {
    throw new Error("Unauthorized!");
  }

  await Journal.deleteOne();
  revalidatePath("/journals");
}
