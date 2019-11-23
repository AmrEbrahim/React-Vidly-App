import http from "./httpServices";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/auth";

export function login(username, password) {
  return http.post(apiEndPoint, { username, password });
}
