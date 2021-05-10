import {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
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
    // case CREATE_POST_SUCCESS:
    //   return { ...state, post: action.payload };
    // case CREATE_POST_FAIL:
    //   return { ...state, message: action.payload };
    default:
      return state;
  }
}
