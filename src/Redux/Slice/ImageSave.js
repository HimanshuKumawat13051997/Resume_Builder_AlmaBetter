import { createSlice } from "@reduxjs/toolkit";

export const ImageSave = createSlice({
  name: "ImageSave",
  initialState: "",
  reducers: {
    handleImageSave: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleImageSave } = ImageSave.actions;

export default ImageSave.reducer;
