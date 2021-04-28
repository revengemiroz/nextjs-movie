import axios from "axios";

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: process.env.api_key,
  },
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const ImgBaseURL = `https://image.tmdb.org/t/p/w500`;
