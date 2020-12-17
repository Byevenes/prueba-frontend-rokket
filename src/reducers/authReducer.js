import { types } from '../types/types';

/**
 * {
 *  loggin : false
 * }
 */

const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
