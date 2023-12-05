import axios from "axios";
import { API_URL } from "../config/api";

export const createWedding = async () => {
  const response = await axios.post(`${API_URL}`);
  return response;
};