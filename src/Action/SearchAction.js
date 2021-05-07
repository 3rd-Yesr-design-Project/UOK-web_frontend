import { SEARCH_FILTER_SUCCESS, SEARCH_FILTER_FAILED } from './types';

export const searchFilter = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_FILTER_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FILTER_FAILED,
    });
  }
};
