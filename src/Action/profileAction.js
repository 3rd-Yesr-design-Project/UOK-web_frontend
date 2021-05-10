import {
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  GET_PROFILE_ERROR,
} from './types';

export const getProfileByUserId = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROFILE,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const editProfile = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_ERROR,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
