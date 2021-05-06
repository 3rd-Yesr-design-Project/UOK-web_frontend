import axios from 'axios';

const httpSocialService = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

httpSocialService.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('socialToken');
  return Promise.resolve(config);
});

httpSocialService.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error.response);
  }
);

export default httpSocialService;
