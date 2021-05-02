import {
  ADD_RESULT_SUCCESS,
  UPDATE_RESULT_SUCCESS,
  ADD_RESULT_FAILED,
  UPDATE_RESULT_FAILED,
  STUDENT_RESULT,
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAILED,
} from '../Action/types';

const initialState = {
  // result: {},
  // results: [{}],
  results: [],
  subjects: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_RESULT_SUCCESS:
      return {
        ...state,
        result: payload,
      };
    case STUDENT_RESULT:
      return { ...state, results: payload };
    case GET_SUBJECTS_SUCCESS:
      return { ...state, subjects: payload };
    case GET_SUBJECTS_FAILED:
      return {};
    default:
      return state;
  }
}
