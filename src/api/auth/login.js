import { api } from "../config/api";


export const LoginApi = async (body) => {
  try {
    const response = await api.post("/login", body);
    const responseData = response;

    localStorage.setItem('userData', JSON.stringify(responseData));

    return responseData;
  } catch (error) {
    throw error;
  }
};

export const LogOutApi = async () => {
  try {
    const response = await api.get('/logout');
    if (response.success) {
      window.location.reload();
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
