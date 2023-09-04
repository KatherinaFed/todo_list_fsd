import axios from "axios";
import { API_URL } from "../config";

export default instanceAPI = axios.create({
  baseURL: API_URL,
})