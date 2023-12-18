import { api } from "../config/api";


export const addContacts = async (body) => {
  try {
    const response = await api.post("/addContact", body);
    const responseData = response;
    return responseData;
  } catch (error) {
    throw error;
  }
};