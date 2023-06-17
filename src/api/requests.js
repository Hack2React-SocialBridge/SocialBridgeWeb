import axios from "axios";

const baseURL = "http://172.20.10.2:8000";
const token = "";

export const API = axios.create({
  baseURL: baseURL,
  validateStatus: function (status) {
    return status < 500;
  }, 
  headers: {
    Authorization: `Bearer ${token}`,
    "image-size": "small"
  }
});
