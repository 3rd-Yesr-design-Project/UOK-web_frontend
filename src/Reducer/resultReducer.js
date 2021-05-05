import {
  ADD_RESULT_SUCCESS,
  STUDENT_RESULT,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILED,
  GET_STUDENTS_SUCCESS,
  GET_STUDENT_FAILED,
} from '../Action/types';

const initialState = {
  // result: {},
  // results: [{}],
  results: [],
  // subjects: [],
  // students: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log('student', payload);

  switch (type) {
    case ADD_RESULT_SUCCESS:
      return {
        ...state,
        result: payload,
      };
    case STUDENT_RESULT:
      return { ...state, results: payload };
    default:
      return state;
  }
}
