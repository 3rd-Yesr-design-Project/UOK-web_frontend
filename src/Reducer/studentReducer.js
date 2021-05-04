import { GET_SUBJECTS_SUCCESS, GET_SUBJECTS_FAILED } from '../Action/types';

const initialState = {
  students: [],
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
    default:
      return {};
  }
}
