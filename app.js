import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createCar from "./routes/createCar.js";
import readCar from "./routes/readCar.js";
import updateCar from "./routes/updateCar.js";
import deleteCar from "./routes/deleteCar.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/cars/create", createCar);
app.use("/api/cars/read", readCar);
app.use("/api/cars/update", updateCar);
app.use("/api/cars/delete", deleteCar);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
