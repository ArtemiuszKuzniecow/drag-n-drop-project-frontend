import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {
    initial: { top: 50, left: 20, data: "Первый шаг", id: 0 },
  },
};

export const mainSlice = createSlice({
  name: "drag_n_drop_project",
  initialState,
  reducers: {
    addBlock: (state, action) =>
      void (state.content = { ...state.content, ...action.payload }),
    moveBlocks: (state, action) => void (state.content = { ...action.payload }),
  },
});

export const { reducer: mainReducer } = mainSlice;
