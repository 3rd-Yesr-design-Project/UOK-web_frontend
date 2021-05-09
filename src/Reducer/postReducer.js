import {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_POST,
} from '../Action/types';

const initialState = {
  posts: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POST:
      return { ...state, posts: payload };
    // case CREATE_POST_SUCCESS:
    //   return { ...state, post: action.payload };
    // case CREATE_POST_FAIL:
    //   return { ...state, message: action.payload };
    default:
      return state;
  }
}
