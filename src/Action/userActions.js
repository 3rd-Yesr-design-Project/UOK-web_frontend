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
} from './types';
import { toast } from 'react-toastify';
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

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res?.data,
    });
    return toast.success('Login Success');
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
    return toast.warn('Login Failed');
  }
};

export const resultLoginUser = (payload) => {
  try {
    toast.success('Result Login Success');
    return {
      type: RESULT_LOGIN_SUCCESS,
      payload: payload,
    };
  } catch (error) {
    toast.warn('Result Login Failed');
  }
};

export const socialLoginUser = (payload) => {
  try {
    toast.success('Social Login Success');
    return {
      type: SOCIAL_LOGIN_SUCCESS,
      payload: payload,
    };
  } catch (error) {
    toast.warn('Social Login Failed');
  }
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

export const logOutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT,
      payload: [],
    });
    toast.success('Log out Success');
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
    toast.warn('Logout Failed');
  }
};
