import { Sensor } from "../models/sensor.model.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";

const addSensorData = asyncHandler(async (req, res) => {
  const { voltage } = req.body;

  const sensorData = await Sensor.create({
    voltage,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      sensorData,
      "Sensor data stored successfully"
    )
  );
});

const getLatestSensorData = asyncHandler(async (req, res) => {
  const latestData = await Sensor.findOne().sort({
    createdAt: -1,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      latestData,
      "Latest sensor data fetched"
    )
  );
});

export {
  addSensorData,
  getLatestSensorData,
};