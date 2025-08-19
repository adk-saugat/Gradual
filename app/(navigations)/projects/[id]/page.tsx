import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Project from "@/models/Project";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import {
  CalendarIcon,
  Target,
  Clock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  connectDB();

  const sessionUser = await getSessionUser();
  const userId = sessionUser?.userId;

  if (!userId) {
    throw new Error("UserId is required!");
  }

  const project = await Project.findOne({ _id: params.id, owner: userId });

  if (!project) {
    notFound();
  }

  // Convert Mongoose document to plain object
  const plainProject = JSON.parse(JSON.stringify(project));

  const completedMilestones = plainProject.milestones.filter(
    (m: any) => m.completed
  ).length;
  const totalMilestones = plainProject.milestones.length;

  const statusConfig = {
    planning: {
      label: "Planning",
      color: "bg-blue-100 text-blue-800",
      icon: Circle,
    },
    "in-progress": {
      label: "In Progress",
      color: "bg-yellow-100 text-yellow-800",
      icon: Clock,
    },
    completed: {
      label: "Completed",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle2,
    },
    "on-hold": {
      label: "On Hold",
      color: "bg-red-100 text-red-800",
      icon: Clock,
    },
  };

  const status = statusConfig[plainProject.status];
  const StatusIcon = status.icon;

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {plainProject.title}
          </h1>
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${status.color}`}
          >
            <StatusIcon className="inline w-4 h-4 mr-2" />
            {status.label}
          </span>
        </div>
        <Link href="/projects">
          <Button variant="outline">← Back</Button>
        </Link>
      </div>

      {/* Project Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Description */}
          {plainProject.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {plainProject.description}
              </p>
            </div>
          )}

          {/* Dates */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Timeline
            </h2>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <CalendarIcon className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Start Date</div>
                  <div className="text-sm text-gray-500">
                    {format(
                      new Date(plainProject.startDate),
                      "EEEE, MMMM dd, yyyy"
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Target className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <div className="font-medium">Target Completion</div>
                  <div className="text-sm text-gray-500">
                    {format(
                      new Date(plainProject.targetCompletionDate),
                      "EEEE, MMMM dd, yyyy"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Project Information
            </h2>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                Created:{" "}
                {format(new Date(plainProject.createdAt), "MMM dd, yyyy")}
              </div>
              <div>
                Last Updated:{" "}
                {format(new Date(plainProject.updatedAt), "MMM dd, yyyy")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Milestones Progress */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Milestones Progress
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-gray-900">
                {completedMilestones}/{totalMilestones}
              </span>
              <span className="text-gray-600">completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    totalMilestones > 0
                      ? (completedMilestones / totalMilestones) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <div className="text-sm text-gray-600">
              {totalMilestones > 0 ? (
                <span>
                  {Math.round((completedMilestones / totalMilestones) * 100)}%
                  complete
                </span>
              ) : (
                <span>No milestones yet</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Milestones</h2>
          <Button variant="outline" size="sm">
            + Add Milestone
          </Button>
        </div>

        {plainProject.milestones.length > 0 ? (
          <div className="space-y-4">
            {plainProject.milestones.map((milestone: any, index: number) => (
              <div
                key={milestone._id}
                className={`flex items-center p-4 border rounded-lg ${
                  milestone.completed
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center flex-1">
                  <div className="mr-4">
                    {milestone.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-medium ${
                        milestone.completed
                          ? "line-through text-green-700"
                          : "text-gray-900"
                      }`}
                    >
                      {milestone.text}
                    </div>
                    {milestone.dueDate && (
                      <div className="text-sm text-gray-500 mt-1">
                        Due:{" "}
                        {format(new Date(milestone.dueDate), "MMM dd, yyyy")}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      milestone.completed ? "text-green-700" : "text-gray-600"
                    }
                  >
                    {milestone.completed ? "Completed" : "Mark Complete"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Circle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No milestones yet
            </h3>
            <p className="text-gray-500 mb-4">
              Add milestones to track your project progress
            </p>
            <Button>Add First Milestone</Button>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <Button className="flex-1">Edit Project</Button>
        <Button variant="outline" className="flex-1">
          Delete Project
        </Button>
      </div>
    </div>
  );
}
