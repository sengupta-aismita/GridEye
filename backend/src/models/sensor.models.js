import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema(
  {
    voltage: {
      type: Number,
      required: true,
    },

    current: {
      type: Number,
      default: 0,
    },

    power: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Sensor = mongoose.model(
  "Sensor",
  sensorSchema
);