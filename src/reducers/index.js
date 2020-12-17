import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  ui: uiReducer,
});
