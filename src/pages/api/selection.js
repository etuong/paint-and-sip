import Painting from "../../models/painting";
import connectDB from "../../lib/connectDB"

export default async function handler(req, res) {
  await connectDB()
  const votes = await Painting.find().sort({ vote: -1 }).limit(2);
  res.status(200).json({ votes: votes })
}