import { createSlice } from "@reduxjs/toolkit";

export const ExpAddition = createSlice({
  name: "ExpAddition",
  initialState: [],
  reducers: {
    addition: (state, action) => {
      return [...state, state.length];
    },
    del: (state, action) => {
      const indexToDelete = action.payload;
      const newData = [...state];
      newData.splice(indexToDelete, 1);
      return newData;
    },
    refresh: (state) => {
      return [];
    },
  },
});

export const { addition, del, refresh } = ExpAddition.actions;

export default ExpAddition.reducer;
