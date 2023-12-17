import mongoose, { Schema } from "mongoose";

const statusEnum = ["todo", "completed"];
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: statusEnum,
  },
});

export default mongoose.model("Todo", todoSchema);
