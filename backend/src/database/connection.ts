import mongoose from "mongoose";
import { env } from "../config/env";

console.log("Mongo URI:", env.MONGODB_URI);
console.log("Length:", env.MONGODB_URI.length);

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;