import { Schema, model, models } from "mongoose";

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Assignment title is required!"],
  },
  description: {
    type: String,
    required: [true, "Assignment description is required!"],
  },
  dueDate: {
    year: {
      type: Number,
      required: [true, "Year is required!"],
    },
    month: {
      type: String,
      required: [true, "Month is required!"],
    },
    date: {
      type: Number,
      required: [true, "Date is required!"],
    },
  },
  status: {
    type: String,
    required: [true, "Assignment Status is required!"],
  },
});

const Assignment = models.Assignment || model("Assignment", assignmentSchema);

export default Assignment;
