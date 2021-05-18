import {
  ADD_FRIEND,
  ADD_FRIEND_FAILED,
  GET_FRIEND_REQUESTS,
  GET_FRIEND_REQUESTS_FAILED,
  FETCH_FRIEND,
  FETCH_FRIEND_FAILED,
  REMOVE_FRIEND,
  REMOVE_FRIEND_FAILED,
  FETCH_UOKFRIEND,
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

export const getFriendRequest = (payload) => {
  return {
    type: GET_FRIEND_REQUESTS,
    payload: payload,
  };
  // try {
  //   dispatch({
  //     type: GET_FRIEND_REQUESTS,
  //     payload: payload,
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: GET_FRIEND_REQUESTS_FAILED,
  //     payload: {
  //       msg: error?.response?.statusText,
  //       status: error?.response?.status,
  //     },
  //   });
  // }
};

export const getUOKFriends = (payload) => {
  return {
    type: FETCH_UOKFRIEND,
    payload: payload,
  };
};

export const getFriend = (payload) => {
  return {
    type: FETCH_FRIEND,
    payload: payload,
  };
};

export const fetchFriend = (payload) => async (dispatch) => {
  // try {
  //   dispatch({
  //     type: FETCH_FRIEND,
  //     payload: payload,
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: FETCH_FRIEND_FAILED,
  //     payload: {
  //       msg: error?.response?.statusText,
  //       status: error?.response?.status,
  //     },
  //   });
  // }
};

export const removeFriendRequest = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FRIEND,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FRIEND_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
