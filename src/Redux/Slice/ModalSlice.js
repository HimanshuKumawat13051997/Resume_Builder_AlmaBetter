import { createSlice } from "@reduxjs/toolkit";

export const ModelHandler = createSlice({
  name: "ModelHandler",
  initialState: false,
  reducers: {
    handleModal: (state, action) => action.payload,
  },
});

export const { handleModal } = ModelHandler.actions;

export default ModelHandler.reducer;
