import { configureStore } from '@reduxjs/toolkit';
//import { createAction, createReducer } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
//const myReducer = createReducer(10, {});

export const store = configureStore({
  reducer: counterReducer,
});
