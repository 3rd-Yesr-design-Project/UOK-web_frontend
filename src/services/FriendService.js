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

  acceptFriendRequest(payload, requestId) {
    return HttpService.put(`friend/${requestId}`, payload);
  }

  removeFriendRequest(requestId) {
    return HttpService.delete(`friend/${requestId}`);
  }

  getMyFriendRequest() {
    return HttpService.get('friend/pending');
  }
}

export default new FriendService();
