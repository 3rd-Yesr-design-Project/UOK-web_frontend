import {
  ADD_FRIEND,
  ADD_FRIEND_FAILED,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_FAILED,
} from '../Action/types';

const initialState = {
  friends: [],
  friendsRequest: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FRIEND:
      return { ...state, friends: payload };
    case GET_FRIEND_REQUESTS:
      return { ...state, friendsRequest: payload };
    default:
      return state;
  }
}
