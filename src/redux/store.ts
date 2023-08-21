import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { categoriesSlice } from './categories-slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const apiMiddleware = () => (next: any) => (action: any) => {
  if (action.type === 'categories/fetchCategories') {
    const fetchdata = async () => {
      const response = await fetch('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
      const data = await response.json()
      next(categoriesSlice.actions.seedCategories(data.data))
    }
    fetchdata()
  } else {
    next(action);
  }
};


const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...customizedMiddleware, apiMiddleware],
});

export type RootState = ReturnType<typeof rootReducer>;

