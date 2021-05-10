import httpService from './HttpService';

class SocialSearch {
  socialSearchInfo(payload) {
    return httpService.post('/user/search', payload);
  }
}

export default new SocialSearch();
