import {
  ADD_FRIEND,
  ADD_FRIEND_FAILED,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_FAILED,
} from './types';

export const addFriend = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_FRIEND,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: ADD_FRIEND_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const getFriendRequest = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FRIEND_REQUESTS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: GET_FRIEND_REQUESTS_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
