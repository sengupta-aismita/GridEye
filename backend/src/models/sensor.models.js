import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  voltage: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const Sensor = mongoose.model("Sensor", sensorSchema);