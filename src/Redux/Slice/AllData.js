import { createSlice } from "@reduxjs/toolkit";

export const AllData = createSlice({
  name: "AllData",
  initialState: "",
  reducers: {
    dataStore: (state, action) => {
      let data = action.payload;
      return data;
    },
  },
});

export const { dataStore } = AllData.actions;

export default AllData.reducer;
