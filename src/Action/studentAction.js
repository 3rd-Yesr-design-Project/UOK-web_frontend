import {
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAILED,
  GET_SUBJECT_STUDENTS,
} from './types';

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
      type: GET_STUDENTS_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
//------------------------------------------------------------------------
export const getStudentBySubjectIdndAcadomicYear = (payload) => {
  console.log('pppppppppppppppp', payload);
  return {
    type: GET_SUBJECT_STUDENTS,
    payload: payload,
  };
};
