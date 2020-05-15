import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import itemReducer from './itemReducer';

import adminReducer from "./adminReducer"
export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  user : usersReducer,
  items : itemReducer,

  admin:adminReducer
});