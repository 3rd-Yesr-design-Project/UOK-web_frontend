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
} from './types';

import userServices from '../services/UserServices';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = ''; //await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
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

export const updateProfile = (data) => async (dispatch) => {
  console.log('action', data);
  try {
    //  const res = await userServices.updateProfile(id, data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: Response.data,
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

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await userServices.login(data);
    console.log('response', res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const resultLoginUser = (payload) => {
  return {
    type: RESULT_LOGIN_SUCCESS,
    payload: payload,
  };
};

export const socialLoginUser = (payload) => {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: payload,
  };
};

export const getAllUsers = (payload) => {
  return {
    type: GET_USERS,
    payload: payload,
  };
};

export const getLoginUser = (payload) => {
  return {
    type: GET_LOGIN_USER,
    payload: payload,
  };
};
