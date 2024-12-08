import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// CREATE a new car
router.post("/", async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json({ message: "Car created successfully", car });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
