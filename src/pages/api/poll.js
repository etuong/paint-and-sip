import Painting from "../../models/painting";
import connectDB from "../lib/connectDB"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB()

    const { name } = req.body;
    let exist = await Painting.findOne({ name: name });
    if (exist) {
      await Painting.findOneAndUpdate({ name: name }, { $inc: { 'vote': 1 } }).exec();
    } else {
      const person = new Painting({
        name,
        vote: 1,
      })
      await person.save()
    }

    res.status(200).json({ done: true })
  }
}