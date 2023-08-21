import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../domain/entities/category.entity";

interface CategoriesState {
  categories: Category[];
  currentCategory?: Category;
}

const initialState: CategoriesState = {
  categories: [
    new Category("Marketing", "marketing", "Marketing"),
    new Category("Sales", "sales", "Sales"),
    new Category("Customer Success", "customer-success", "Customer Success"),
  ],
};

const categoriesReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = state.categories.find((c) => c.id === action.payload);
    },
    seedCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const categoriesSlice = {
  reducer: categoriesReducer.reducer,
  actions: categoriesReducer.actions
} 
