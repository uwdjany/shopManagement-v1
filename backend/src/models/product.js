import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: String,
    unity: String,
    description: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("product",Schema);