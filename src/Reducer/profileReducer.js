import { GET_PROFILE } from '../Action/types';

const initialState = {
  userProfile: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return { ...state, userProfile: payload };
    default:
      return state;
  }
}
