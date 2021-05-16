import HttpService from './HttpService';

class FriendService {
  addFriend(payload) {
    return HttpService.post('/friend', payload);
  }

  getFriendRequests() {
    return HttpService.get('/all-friends');
  }

  getFriend(friendId) {
    return HttpService.get(`/friend/${friendId}`);
  }
}

export default new FriendService();
