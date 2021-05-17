import {
  ADD_FRIEND,
  ADD_FRIEND_FAILED,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_FAILED,
  FETCH_FRIEND,
  FETCH_FRIEND_FAILED,
  REMOVE_FRIEND,
} from '../Action/types';

const initialState = {
  // friends: [],
  friend: {},
  friendsRequest: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log('reducer', payload);
  switch (type) {
    case ADD_FRIEND:
      return {
        ...state,
        friendsRequest: [...state.friendsRequest, payload],
        friend: { payload },
      };
    case GET_FRIEND_REQUESTS:
      return { ...state, friendsRequest: payload };
    case FETCH_FRIEND:
      return { ...state, friend: payload };
    case REMOVE_FRIEND:
      return { ...state, friend: payload };
    default:
      return state;
  }
}
