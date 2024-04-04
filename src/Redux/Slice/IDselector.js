import { createSlice } from "@reduxjs/toolkit";

export const IDselector = createSlice({
  name: "IDselector",
  initialState: null,
  reducers: {
    handleSelector: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleSelector } = IDselector.actions;

export default IDselector.reducer;
