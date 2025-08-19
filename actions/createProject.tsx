"use server";

import connectDB from "@/config/database";
import Project from "@/models/Project";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";

export default async function createProject(formData: FormData): Promise<void> {
  connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("UserId is required!");
  }

  const { userId } = sessionUser;

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString() || "";
  const startDate = formData.get("startDate")?.toString();
  const targetCompletionDate = formData.get("targetCompletionDate")?.toString();
  const milestonesData = formData.get("milestones")?.toString();

  // Type guard to ensure all required fields exist
  if (!title || !startDate || !targetCompletionDate) {
    throw new Error(
      "Title, start date, and target completion date are required"
    );
  }

  // Parse milestones if they exist
  let milestones = [];
  if (milestonesData) {
    try {
      milestones = JSON.parse(milestonesData);
    } catch (error) {
      console.error("Error parsing milestones:", error);
      milestones = [];
    }
  }

  const projectData = {
    title,
    description,
    startDate: new Date(startDate),
    targetCompletionDate: new Date(targetCompletionDate),
    milestones: milestones.map((milestone: any) => ({
      text: milestone.text,
      completed: false,
    })),
    owner: userId,
  };

  await Project.create(projectData);
  revalidatePath("/projects");
  redirect("/projects");
}
