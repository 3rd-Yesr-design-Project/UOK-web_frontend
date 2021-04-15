import {
  ADD_RESULT_SUCCESS,
  UPDATE_RESULT_SUCCESS,
  ADD_RESULT_FAILED,
  UPDATE_RESULT_FAILED,
  STUDENT_RESULT,
} from '../Action/types';

const initialState = {
  // result: {},
  // results: [{}],
  results: []
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
      return {...state, results: payload}
    default:
      return state;
  }
}
