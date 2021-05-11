import httpService from './HttpService';

class ProfileServie {
  fetchProfileByUserId(userId) {
    return httpService.get(`/profile/${userId}`);
  }

  editProfileByUserId(profileId, body) {
    return httpService.put(`/profile/${profileId}`, body);
  }
}

export default new ProfileServie();
