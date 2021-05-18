import httpService from './HttpService';

class UserService {
  resultLogin(payload) {
    return httpService.post('/result/login', payload);
  }

  socialLogin(payload) {
    return httpService.post('/social/login', payload);
  }

  fetchAllUsers() {
    return httpService.get('/all-user');
  }

  forgetPassword(payload) {
    return httpService.post('/user/forgetpassword', payload);
  }
  resetPassword(userId, payload) {
    return httpService.post(`/user/resetpassword/${userId}`, payload);
  }

  fetchLoginUser() {
    return httpService.get('/whoAmI');
  }
}

export default new UserService();
