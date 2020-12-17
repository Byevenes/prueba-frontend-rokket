import { types } from '../types/types';

/**
 * {
 *  postLoad : []
 *  postByTag : []
 * }
 */

const initialState = {
  postLoad: [],
  postByTag: [],
  postByTagSucces: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postGetAll:
      return {
        ...state,
        postLoad: [...action.payload],
      };

    case types.postByTag:
      return {
        ...state,
        postByTag: [...action.payload],
      };
    case types.postByTagSucces:
      return {
        ...state,
        postByTagSucces: true,
      };
    case types.postByTagFailed:
      return {
        ...state,
        postByTagSucces: false,
      };
    default:
      return state;
  }
};
