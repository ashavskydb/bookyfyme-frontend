import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Добавьте другие редукторы здесь
});

export default rootReducer;
