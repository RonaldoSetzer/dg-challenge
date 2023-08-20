import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { uiSlice } from './ui-slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof rootReducer>;

