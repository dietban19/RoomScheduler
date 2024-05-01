import express from "express";
import { connectDB } from "./db/conn.js";
import cors from "cors";

// Initialize Express App
const app = express();
const PORT = 8080; // Setting up the port number

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    // here we call the function the connects the server to MONGO
    console.log("Connecting to MONGO!!");
    await connectDB();
    //   listenToReservationExpiries();
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
});
