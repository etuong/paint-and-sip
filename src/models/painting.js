import mongoose from "mongoose";

const Painting = mongoose.Schema(
  {
    name: String,
    vote: Number
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Painting || mongoose.model("Painting", Painting);