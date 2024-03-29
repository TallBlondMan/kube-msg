import axios from 'axios';

export default axios.create({
  // Just API as frontend is served with Nginx and he will redirect the message to backend
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})