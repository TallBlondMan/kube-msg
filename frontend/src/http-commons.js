import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/api/`,
  headers: {
    'Content-Type': 'application/json'
}
});