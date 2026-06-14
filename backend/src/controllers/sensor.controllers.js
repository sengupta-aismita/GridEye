import { Sensor } from "../models/sensor.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

const addSensorData = asyncHandler(async (req, res) => {
  const { voltage, current, power } = req.body;

  if(!voltage){
    throw new ApiError(400, "Voltage is required")
  }

  const sensorData = await Sensor.create({
    voltage, current,power
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
    
  }).limit(50);;

  return res.status(200).json(
    new ApiResponse(
      200,
      latestData,
      "Latest sensor data fetched"
    )
  );
});

const getSensorHistory =
  asyncHandler(async (req, res) => {

    const history =
      await Sensor.find()
      .sort({ createdAt: -1 });

    return res.status(200).json(
      new ApiResponse(
        200,
        history,
        "History fetched"
      )
    );
});

export {
  addSensorData,
  getLatestSensorData,
  getSensorHistory
};