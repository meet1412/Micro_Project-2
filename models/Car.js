import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: true, minlength: 2 },
  model: { type: String, required: true, minlength: 2 },
  year: { type: Number, required: true, min: 1886 },
  price: { type: Number, required: true, min: 0 },
  isAvailable: { type: Boolean, default: true },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
