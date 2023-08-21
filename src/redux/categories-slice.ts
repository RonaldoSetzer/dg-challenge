import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../domain/entities/category.entity";
import { SeedByApiUseCase } from "../usecases/seed-by-api.usecase";
import { PluginsDto, TabDataDto } from "../domain/dtos/api-payload.dto"

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
    seedCategories: (state, action: PayloadAction<{tabs: string[], plugins: PluginsDto, tabdata: TabDataDto}>) => {
      const { tabs, tabdata, plugins } = action.payload;
      if (!tabs || !tabdata || !plugins) {
        return;
      }
      state.categories = new SeedByApiUseCase(tabs, tabdata, plugins).execute();
    },
  },
});

export const categoriesSlice = {
  reducer: categoriesReducer.reducer,
  actions: categoriesReducer.actions
} 
