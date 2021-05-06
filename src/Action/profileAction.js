import { GET_PROFILE } from './types';

export const getProfileByUserId = (payload) => {
  return {
    type: GET_PROFILE,
    payload: payload,
  };
};
