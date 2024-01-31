import Painting from "../../models/painting";
import connectDB from "../lib/connectDB"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDB()

    const { name } = req.body;
    console.log(name);
    const exist = await Painting.findOne({ name: name });
    if (exist) {
      console.log("found, incrementing")
      await Painting.findOneAndUpdate({ name: name }, { $inc: { 'vote': 1 } }).exec();
    } else {
      console.log("not found, saving")
      const person = new Painting({
        name: name,
        vote: 1,
      })
      await person.save()
    }

    res.status(200).json({ done: true })
  }
}