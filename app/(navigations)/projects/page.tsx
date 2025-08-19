import connectDB from "@/config/database";
import ProjectCard from "./ProjectCard";
import { getSessionUser } from "@/utils/getSessionUser";
import Project from "@/models/Project";
import AddButton from "../AddButton";

export default async function ProjectsPage() {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }

  const projects = await Project.find({ owner: userId }).sort({
    createdAt: -1,
  });

  // Convert Mongoose documents to plain objects for client components
  const plainProjects = JSON.parse(JSON.stringify(projects));

  return (
    <div className="flex flex-col gap-4">
      <form action="">
        <input
          type="text"
          placeholder="Search Projects..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </form>

      <AddButton text="Add Project" urlLocation="/projects/add" />

      {/* Projects List */}
      {Array.isArray(plainProjects) && plainProjects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plainProjects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-6 text-lg font-light text-gray-400">
          No Projects added yet!
        </div>
      )}
    </div>
  );
}
