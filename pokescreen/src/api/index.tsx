import axios from "axios";

const api = axios.create({
  baseURL: " https://pokeapi.co/api/v2/pokemon",
  timeout: 5000,
});

export default api;
