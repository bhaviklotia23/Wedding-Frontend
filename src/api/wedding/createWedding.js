import axios from "axios";
import { BASE_URL } from "../config/api";

export const createWedding = async () => {
  const response = await axios.post(`${BASE_URL}`);
  return response;
};
