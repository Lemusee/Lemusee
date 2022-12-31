import axios from "axios";

export const BASE_URL:string = "https://prod.lemusee.site";
export const BASE_URL_PROXY:string = ""

export const lemuseeClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});