"use server";

import connectDB from "@/config/database";

export async function createUser(formData: FormData): Promise<void> {
  connectDB();

  const title = formData.get("title");
  const description = formData.get("description");
  const dueDate = formData.get("dueDate")?.toString();
  const status = formData.get("status");

  // Type guard to ensure all required fields exist
  if (!title || !description || !dueDate || !status) {
    throw new Error("All fields are required");
  }
  const dateArray = dueDate.split("-");
  console.log(dateArray);
}
