import axios from "axios";
const baseUrl = "http://starlord.hackerearth.com";

export const getRequest = (path) => {
  return axios.get(`${baseUrl}${path}`);
};
