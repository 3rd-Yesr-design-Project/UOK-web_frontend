import {
  GET_FRIEND_REQUESTS,
  FETCH_FRIEND,
  FETCH_UOKFRIEND,
} from '../Action/types';

const initialState = {
  friendsRequest: [],
  friends: [],
  friend: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FRIEND_REQUESTS:
      return { ...state, friendsRequest: payload };
    case FETCH_UOKFRIEND:
      return { ...state, friends: payload };
    case FETCH_FRIEND:
      return { ...state, friend: payload };
    default:
      return state;
  }
}
