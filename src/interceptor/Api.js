import axios from "axios";
const client=axios.create({
  baseURL:'http://localhost:64790/api/Selfcare/',
});
export default client;