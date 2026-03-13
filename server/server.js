import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, db } from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

await connectDB();

app.get("/members", async (req, res) => {
  const members = await db.collection("members").find().toArray();
  res.json(members);
});

app.post("/members", async (req, res) => {
  const member = req.body;

  const result = await db.collection("members").insertOne(member);

  res.json(result);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});