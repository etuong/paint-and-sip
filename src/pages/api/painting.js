import Painting from "../../models/painting";
import connectDB from "../lib/connectDB"

export default async function handler(req, res) {
  await connectDB()
  const { name } = req.query
  console.log(name)
  const painting = await Painting.findOne({ name: name });
  res.status(200).json({ painting: painting })
}