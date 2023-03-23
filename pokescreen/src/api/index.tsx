import axios from "axios";

const api = axios.create({
  baseURL: " https://pokeapi.co/api/v2/pokemon?limit=20",
  timeout: 5000,
});

export default api;
