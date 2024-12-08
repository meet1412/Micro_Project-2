import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// UPDATE a car by ID
router.put("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json({ message: "Car updated successfully", car });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
