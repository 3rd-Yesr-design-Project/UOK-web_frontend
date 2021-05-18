import { GET_FRIEND_REQUESTS } from '../Action/types';

const initialState = {
  friendRequest: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log('hhhhhhhhhhhhhhhhhhhhhhhh', payload);
  switch (type) {
    case GET_FRIEND_REQUESTS:
      return { ...state, friendRequest: payload };
    default:
      return state;
  }
}
