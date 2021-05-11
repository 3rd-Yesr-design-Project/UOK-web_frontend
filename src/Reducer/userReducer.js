import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  RESULT_LOGIN_SUCCESS,
  SOCIAL_LOGIN_SUCCESS,
  GET_USERS,
  GET_LOGIN_USER,
  USER_LOGOUT,
  USER_LOGOUT_FAILED,
} from '../Action/types';

const initialState = {
  user: null,
  token: null,
  users: [],
  // profile: null,
  // profiles: [],
  // posts: [{}],
  // isAdmin: false,
  // results: [{}],
  // loading: true,
  // error: { msg: '', status: '' },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESULT_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, token: payload.token, user: payload.loginUser };
    case SOCIAL_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, token: payload.token, user: payload.loginUser };
    case GET_LOGIN_USER:
      return { ...state, user: payload };
    case GET_USERS:
      return { ...state, users: payload };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_PROFILE_ERROR:
    case LOGIN_FAILED:
    case USER_LOGOUT_FAILED:
      return {
        ...state,
        error: {
          msg: payload.msg,
          status: payload.status,
        },
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
