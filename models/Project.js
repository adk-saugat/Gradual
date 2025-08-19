import { Schema, model, models } from "mongoose";

const milestoneSchema = new Schema({
  text: {
    type: String,
    required: [true, "Milestone text is required!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
});

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required!"],
    },
    description: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required!"],
    },
    targetCompletionDate: {
      type: Date,
      required: [true, "Target completion date is required!"],
    },
    milestones: [milestoneSchema],
    status: {
      type: String,
      enum: ["in-progress", "completed"],
      default: "in-progress",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model("Project", projectSchema);

export default Project;
