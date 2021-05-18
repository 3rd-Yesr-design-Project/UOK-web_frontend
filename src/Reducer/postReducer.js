import {
  GET_POST,
  GET_USER_POSTS,
  GET_USER_POST_FAILED,
} from '../Action/types';

const initialState = {
  posts: [],
  userPost: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POST:
      return { ...state, posts: payload };
    case GET_USER_POSTS:
      return { ...state, userPost: payload };
    case GET_USER_POST_FAILED:
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
