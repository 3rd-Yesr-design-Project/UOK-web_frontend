import { SEARCH_FILTER_SUCCESS, SEARCH_FILTER_FAILED } from '../Action/types';

const initialState = {
  filterFriend: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_FILTER_SUCCESS:
      return { ...state, filterFriend: payload };
    case SEARCH_FILTER_FAILED:
      return {
        ...state,
        error: {
          msg: payload.msg,
          status: payload.status,
        },
      };
    default:
      return { state };
  }
}
