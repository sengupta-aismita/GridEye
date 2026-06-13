import { Router } from "express";

import {
  addSensorData,
  getLatestSensorData,
} from "../controllers/sensor.controller.js";

const router = Router();

router.post("/", addSensorData);

router.get("/latest", getLatestSensorData);

export default router;