import axios from 'axios';

const httpService = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

httpService.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('socialToken');
  return Promise.resolve(config);
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error.response);
  }
);

export default httpService;
