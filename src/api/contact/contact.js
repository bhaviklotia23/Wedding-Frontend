import axios from "axios";
import { api } from "../config/api";

export const addContacts = async (body) => {
  console.log(body, "body");
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/addContact",
      body
    );
    const responseData = response;
    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
