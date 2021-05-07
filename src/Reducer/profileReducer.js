import {
  GET_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE,
} from '../Action/types';

const initialState = {
  userProfile: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return { ...state, userProfile: payload };
    case UPDATE_PROFILE:
      return { ...state, userProfile: payload };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        error: {
          msg: payload.msg,
          status: payload.status,
        },
      };
    default:
      return state;
  }
}
