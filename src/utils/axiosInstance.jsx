// src/api/axiosInstance.js
import axios from "axios";

const url = {
  production:
    "https://mechanic-app-backend.onrender.com/api/master/super/admin",
  development: "http://localhost:8000/api/v1",
};

const API = axios.create({
  baseURL: url.development,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
