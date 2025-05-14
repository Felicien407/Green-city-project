import { Schema, model } from "mongoose";

const seedSchema = new Schema({
  name: String,
  code: String,
  stock: Number,
  image: String, // just the filename
});

export default model("Seed", seedSchema);