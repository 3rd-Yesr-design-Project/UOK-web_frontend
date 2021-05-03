import {
  UPDATE_RESULT_SUCCESS,
  UPDATE_RESULT_FAILED,
  ADD_RESULT_SUCCESS,
  ADD_RESULT_FAILED,
  STUDENT_RESULT,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILED,
  GET_STUDENTS_SUCCESS,
  GET_STUDENT_FAILED,
} from './types';

export const addResult = ({ data }) => async (dispatch) => {
  try {
    const res = ''; //api call
    dispatch({
      type: ADD_RESULT_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_RESULT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const updateResults = ({ id, data }) => async (dispatch) => {
  try {
    const res = ''; //api call

    dispatch({
      type: UPDATE_RESULT_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_RESULT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const fetchResultByUserIdAndYear = (payload) => {
  return {
    type: STUDENT_RESULT,
    payload: payload,
  };
};

export const getSubjectByAcadamicYear = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SUBJECTS_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: GET_SUBJECTS_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const getStudentByStudentIdndAcadomicYear = (payload) => async (
  dispatch
) => {
  try {
    dispatch({
      type: GET_STUDENTS_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
