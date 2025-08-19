"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, X, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import createProject from "@/actions/createProject";

interface Milestone {
  id: string;
  text: string;
}

export default function AddProject() {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date>();
  const [targetDate, setTargetDate] = useState<Date>();
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const addMilestone = () => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      text: "",
    };
    setMilestones([...milestones, newMilestone]);
  };

  const removeMilestone = (id: string) => {
    setMilestones(milestones.filter((milestone) => milestone.id !== id));
  };

  const updateMilestone = (id: string, value: string) => {
    setMilestones(
      milestones.map((milestone) =>
        milestone.id === id ? { ...milestone, text: value } : milestone
      )
    );
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!startDate) {
      newErrors.push("Start date is required");
    }

    if (!targetDate) {
      newErrors.push("Target completion date is required");
    }

    if (startDate && targetDate && targetDate <= startDate) {
      newErrors.push("Target completion date must be after start date");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    if (!validateForm()) {
      return;
    }

    // Add dates to form data
    if (startDate) {
      formData.append("startDate", startDate.toISOString().split("T")[0]);
    }
    if (targetDate) {
      formData.append(
        "targetCompletionDate",
        targetDate.toISOString().split("T")[0]
      );
    }

    // Add milestones to form data
    if (milestones.length > 0) {
      formData.append("milestones", JSON.stringify(milestones));
    }

    // Call the server action
    await createProject(formData);
  };

  return (
    <div className="mt-8 flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 pb-4">
        <h1 className="text-3xl font-medium text-gray-600">Add Project</h1>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex items-center gap-2 text-red-800 mb-2">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">
              Please fix the following errors:
            </span>
          </div>
          <ul className="list-disc list-inside text-red-700 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Form */}
      <form action={handleSubmit} className="flex flex-col gap-4">
        {/* Project Title */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter project title"
            className="w-full p-3 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-gray-700">
            Description{" "}
            <span className="text-gray-500 text-sm">(optional)</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter project description"
            rows={3}
            className="w-full p-3 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-gray-700">
            Start Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal p-3 h-auto text-lg bg-white border border-gray-300 hover:bg-gray-50"
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                {startDate ? format(startDate, "PPP") : "📅 Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Target Completion Date */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-gray-700">
            Target Completion Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal p-3 h-auto text-lg bg-white border border-gray-300 hover:bg-gray-50"
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                {targetDate ? format(targetDate, "PPP") : "📅 Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={targetDate}
                onSelect={setTargetDate}
                initialFocus
                disabled={(date) => (startDate ? date <= startDate : false)}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Initial Milestones */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-gray-700">
            Initial Milestones{" "}
            <span className="text-gray-500 text-sm">(optional)</span>
          </label>

          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="flex items-center gap-3 p-4 border border-gray-300 rounded-md bg-gray-50"
            >
              <input
                type="text"
                placeholder="Enter milestone"
                value={milestone.text}
                onChange={(e) => updateMilestone(milestone.id, e.target.value)}
                className="flex-1 p-2 text-lg bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => removeMilestone(milestone.id)}
                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addMilestone}
            className="w-full p-3 h-auto text-lg border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-600 hover:text-gray-800"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Milestone
          </Button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 p-4 rounded-md text-xl font-medium text-white hover:bg-blue-400 cursor-pointer"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}
