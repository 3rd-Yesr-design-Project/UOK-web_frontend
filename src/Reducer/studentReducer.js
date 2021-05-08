import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILED,
  GET_SUBJECT_STUDENTS,
} from '../Action/types';

const initialState = {
  students: [],
  sujectStudents: [],
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
    case GET_SUBJECT_STUDENTS:
      return { ...state, subjectStudents: payload };
    default:
      return {};
  }
}
