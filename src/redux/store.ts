import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { uiSlice } from './ui-slice';
import { categoriesSlice } from './categories-slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  categories: categoriesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof rootReducer>;

