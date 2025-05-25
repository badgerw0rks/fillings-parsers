import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.log("Unauthorized access");
      
    }
   


     if (error.response?.status === 404) {
      console.log("Unauthorized access");
    }
   
    return Promise.reject(error);
  }
);

export default api;