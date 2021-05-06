import httpSocialService from './HttpScicalService';

class ProfileServie {
  fetchProfileByUserId() {
    return httpSocialService.get(`/profile`);
  }
}

export default new ProfileServie();
