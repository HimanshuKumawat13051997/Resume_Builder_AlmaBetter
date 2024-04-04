import { createSlice } from "@reduxjs/toolkit";

export const FileName = createSlice({
  name: "FileName",
  initialState: "",
  reducers: {
    setFileName(state, action) {
      return action.payload;
    },
  },
});

export const { setFileName } = FileName.actions;
export default FileName.reducer;
