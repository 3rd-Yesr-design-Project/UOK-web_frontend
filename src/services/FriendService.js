import HttpService from './HttpService';

class FriendService {
  addFriend(payload) {
    return HttpService.post('/friend', payload);
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

  fetchUOKFriends() {
    return HttpService.get('friend/all-friends');
  }

  fetchFriend(friendId) {
    return HttpService.get(`friend/friend/${friendId}`);
  }
}

export default new FriendService();
