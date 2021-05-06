import httpSocialService from './HttpSocialService';

class ProfileServie {
  fetchProfileByUserId(userId) {
    return httpSocialService.get(`/profile/${userId}`);
  }
}

export default new ProfileServie();
