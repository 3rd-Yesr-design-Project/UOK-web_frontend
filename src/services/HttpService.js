import axios from 'axios';

const httpService = axios.create({
  baseURL: 'http://34.203.13.248/api/v1',
});

http: httpService.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');
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
