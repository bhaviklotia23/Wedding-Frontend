
import axios from "axios";
import Cookies from "js-cookie";


let base_Url = "http://localhost:5000/api/v1";


export const api = axios.create({
  baseURL: base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((req) => {
  let authRoute = (req.url.includes("login") || req.url.includes("singup"));
  if (!authRoute) {
    const token = JSON.parse(localStorage.getItem("userData"));
    req.headers['Authorization'] = `Bearer ${token.token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
})

api.interceptors.response.use((res) => {
  if (res.data.error) {
    return Promise.reject(res.data);
  } else {
    return Promise.resolve(res.data)
  }
}, (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    try {
      // originalRequest._retry = true;
      // const response = await refreshToken();
      // if(response.status === 200){
      //   error.response.config.headers['Authorizarion'] = response.data.accessToken;
      //   return api(originalRequest)
      // }
    } catch (error) {
      window.location.href = "/auth/login";
      Promise.reject(error.response.data)
    }
  }
  return Promise.reject(error.response.data);
});