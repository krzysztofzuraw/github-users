import axios from "axios";

const URL = "https://api.github.com/";

export const agentInstance = axios.create({
  baseURL: URL,
  timeout: 4000,
});
