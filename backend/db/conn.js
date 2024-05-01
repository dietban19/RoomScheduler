import mongoose from "mongoose";
import dotenv from "dotenv";

// Initialize environment variables
dotenv.config(); // this is the one that calls the environment variable which is MONGO_URI in .env
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed", err);
    process.exit(1); // Exit process with failure
  }
};
