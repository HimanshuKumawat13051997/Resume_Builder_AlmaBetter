import { createSlice } from "@reduxjs/toolkit";

export const DetailsIndex = createSlice({
  name: "DetailsIndex",
  initialState: 1,
  reducers: {
    index: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { index } = DetailsIndex.actions;

export default DetailsIndex.reducer;
