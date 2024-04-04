import { createSlice } from "@reduxjs/toolkit";

export const PreviewVisiblity = createSlice({
  name: "PreviewVisiblity",
  initialState: false,
  reducers: {
    visibilityChange: (state, action) => {
      return action.payload;
    },
  },
});

export const { visibilityChange } = PreviewVisiblity.actions;

export default PreviewVisiblity.reducer;
