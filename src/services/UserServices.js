// // import HttpService from './HttpService';
// import { API } from '../utils/config';
// class UserServices extends HttpService {
//   login = async (payload) => {
//     return await this.sendRequest({
//       method: 'POST',
//       url: API.login,
//       responseType: 'json',
//       data: payload,
//     });
//   };
//   createProfile = async (payload) => {
//     return await this.sendRequest({
//       method: 'POST',
//       url: API.createProfile,
//       responseType: 'json',
//       data: payload,
//     });
//   };

import httpService from './HttpService';
import httpSocialService from './HttpSocialService';

//   getUserById = async (id) => {
//     return await this.sendRequest({
//       method: 'GET',
//       url: API.createProfile + '/' + id,
//       responseType: 'json',
//     });
//   };

//   // uploadPost = async (payload) => {
//   //   return await this.sendRequest({
//   //     method: 'POST',
//   //     url: API.createProfile + '/' + id,
//   //     responseType: 'json',
//   //     data: payload,
//   //   });
//   // };

//   updateProfile = async (id, payload) => {
//     return await this.sendRequest({
//       method: 'PUT',
//       url: API.updateProfile + '/' + id,
//       responseType: 'json',
//       data: payload,
//     });
//   };
// }

// const userServices = new UserServices();
// export default userServices;
class UserService {
  resultLogin(payload) {
    console.log(payload);
    return httpService.post('/result/login', payload);
  }

  socialLogin(payload) {
    return httpService.post('/social/login', payload);
  }

  fetchAllUsers() {
    return httpSocialService.get('/all-user');
  }

  forgetPassword(payload) {
    console.log('ffffffffffffffffff', payload);
    return httpService.post('/user/forgetpassword', payload);
  }
}

export default new UserService();
