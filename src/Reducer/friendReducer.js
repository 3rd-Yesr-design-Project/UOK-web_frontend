import {
  ADD_FRIEND,
  ADD_FRIEND_FAILED,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_FAILED,
  FETCH_FRIEND,
  FETCH_FRIEND_FAILED,
  REMOVE_FRIEND,
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
    // case ADD_FRIEND:
    // return {
    //   ...state,
    //   friendsRequest: [...state.friendsRequest, payload],
    //   friend: { payload },
    // };
    case GET_FRIEND_REQUESTS:
      return { ...state, friendsRequest: payload };
    case FETCH_UOKFRIEND:
      return { ...state, friends: payload };
    case FETCH_FRIEND:
      return { ...state, friend: payload };
    // case FETCH_FRIEND:
    //   return { ...state, friend: payload };
    // case REMOVE_FRIEND:
    //   return { ...state, friend: payload };
    default:
      return state;
  }
}
