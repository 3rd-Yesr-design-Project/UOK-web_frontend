import httpSocialService from './HttpSocialService';

class ProfileServie {
  fetchProfileByUserId(userId) {
    return httpSocialService.get(`/profile/${userId}`);
  }

  editProfileByUserId(profileId, body) {
    return httpSocialService.put(`/profile/${profileId}`, body);
  }
}

export default new ProfileServie();
