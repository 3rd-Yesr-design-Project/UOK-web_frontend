import httpSocialService from './HttpSocialService';

class ProfileServie {
  fetchProfileByUserId() {
    return httpSocialService.get(`/profile`);
  }
}

export default new ProfileServie();
