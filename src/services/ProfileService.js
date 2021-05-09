import httpService from './HttpService';

class ProfileServie {
  fetchProfileByUserId(userId) {
    return httpService.get(`/profile/${userId}`);
  }
}

export default new ProfileServie();
