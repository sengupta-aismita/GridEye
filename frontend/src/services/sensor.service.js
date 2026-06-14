import API from "./api.js";

export const getLatestSensorData = async () => {
  const response = await API.get(
    "/sensor/latest"
  );

  return response.data;
};

export const getSensorHistory = async () => {
  const response = await API.get(
    "/sensor/history"
  );

  return response.data;
};

export const addSensorData = async (
  data
) => {
  const response = await API.post(
    "/sensor/add",
    data
  );

  return response.data;
};