import {
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  GET_POST,
  GET_USER_POSTS,
  GET_USER_POST_FAILED,
} from './types';
import { toast } from 'react-toastify';

export const createPost = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: payload.data.data,
    });
    return toast.success('Post Create Successfully');
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
    //  return toast.warn('Post is not created');
  }
};

export const getPosts = (payload) => {
  return {
    type: GET_POST,
    payload: payload,
  };
};

export const getPostByUserId = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_POSTS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_POST_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
