import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// DELETE a car by ID
router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
