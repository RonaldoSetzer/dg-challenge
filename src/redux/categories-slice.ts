import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../domain/entities/category.entity";
import { SeedByApiUseCase } from "../usecases/seed-by-api.usecase";
import { PluginsDto, TabDataDto } from "../domain/dtos/api-payload.dto"
import { EnableAllPluginsUseCase } from "../usecases/enable-all-plugins.usecase";
import { DisableAllPluginsUseCase } from "../usecases/disable-all-plugins.usecase";
import { TogglePluginActiveUseCase } from "../usecases/toggle-plugin-active.usecase";

interface CategoriesState {
  categories: Category[];
  currentCategory?: Category;
  pluginsEnabled?: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  pluginsEnabled: true
};

const categoriesReducer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = state.categories.find((c) => c.id === action.payload);
    },
    toggleEnableAllPlugins: (state) => {
      const enabled = !state.pluginsEnabled
      enabled
        ? new EnableAllPluginsUseCase(state.categories).execute()
        : new DisableAllPluginsUseCase(state.categories).execute();
      state.categories = [...state.categories];
      state.pluginsEnabled = enabled;
      state.currentCategory = state.categories.find((c) => c.id === state.currentCategory?.id);
    },
    togglePluginActive: (state, action: PayloadAction<string>) => {
      const category = state.categories.find((c) => c.id === state.currentCategory?.id);
      if (!category) {
        return;
      }
      new TogglePluginActiveUseCase(category,action.payload).execute();
      state.categories = [...state.categories];
      state.currentCategory = state.categories.find((c) => c.id === state.currentCategory?.id);
    },
    seedCategories: (state, action: PayloadAction<{ tabs: string[], plugins: PluginsDto, tabdata: TabDataDto }>) => {
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
