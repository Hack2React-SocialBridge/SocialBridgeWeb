import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const token = "";

export const API = axios.create({
    baseURL: baseURL,
    validateStatus: function (status) {
        return status < 500;
    },
    headers: {
        Authorization: `Bearer ${token}`,
        "image-size": "small",
    },
});
