import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILED,
  GET_STUDENTS_SUCCESS,
} from '../Action/types';

const initialState = {
  students: [],
  subjectStudents: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUBJECTS_SUCCESS:
      return { ...state, students: payload };
    case GET_SUBJECTS_FAILED:
      return {
        ...state,
        error: {
          msg: payload.msg,
          status: payload.status,
        },
      };
    case GET_STUDENTS_SUCCESS:
      return { ...state, subjectStudents: payload };
    default:
      return {};
  }
}
