import { createSlice } from "@reduxjs/toolkit";

export const MyResumeData = createSlice({
  name: "MyResumeData",
  initialState: [],
  reducers: {
    handleResumeData: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleResumeData } = MyResumeData.actions;
export default MyResumeData.reducer;
