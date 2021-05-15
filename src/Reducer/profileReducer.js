import {
  GET_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE,
  CREATE_PROFILE,
  CREATE_PROFILE_FAILED,
} from '../Action/types';

const initialState = {
  userProfile: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return { ...state, userProfile: payload };
    case UPDATE_PROFILE:
      return { ...state, userProfile: payload };
    case CREATE_PROFILE:
      return { ...state, userProfile: payload };
    case UPDATE_PROFILE_ERROR:
    case CREATE_PROFILE_FAILED:
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
