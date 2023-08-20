import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  pluginEnabled: boolean;
}

const uiInitialState: UiState = {
  pluginEnabled: false,
};

const uiReducer = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    togglePluginEnabled: (state) => {
      state.pluginEnabled = !state.pluginEnabled;
    }
  },
});

export const uiSlice = {
  reducer: uiReducer.reducer,
  actions: uiReducer.actions,
};

