import { combineReducers } from 'redux';
import auth from './auth';
import portal from './portal';

export default combineReducers(
  { auth, portal }
);
