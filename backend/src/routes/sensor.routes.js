import { Router } from "express";

import {
  addSensorData,
  getLatestSensorData,
  getSensorHistory
} from "../controllers/sensor.controllers.js";

const router = Router();

router.route("/add").post(addSensorData);

router.route("/latest").get(getLatestSensorData)
router.route("/history").get(getSensorHistory)

export default router;