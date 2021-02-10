import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2398',
});

export default api;
