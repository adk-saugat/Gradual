import { Schema, model, models } from "mongoose";

const journalSchema = new Schema({
  title: {
    type: String,
    required: [true, "Journal title is required!"],
  },
  content: {
    type: String,
    required: [true, "Journal content is required!"],
  },
  dateInfo: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Journal = models.Journal || model("Journal", journalSchema);

export default Journal;
