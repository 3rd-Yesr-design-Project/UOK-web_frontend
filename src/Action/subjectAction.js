import { GET_SUBJECTS_SUCCESS, GET_SUBJECTS_FAILED } from './types';

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
