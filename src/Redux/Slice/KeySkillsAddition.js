import { createSlice } from "@reduxjs/toolkit";

export const KeySkillsAddition = createSlice({
  name: "KeySkillsAddition",
  initialState: [0],
  reducers: {
    skillsaddition: (state, action) => {
      return [...state, state.length];
    },
    skillsdel: (state, action) => {
      const indexSkills = action.payload;
      const newData = [...state];
      newData.splice(indexSkills, 1);
      return newData;
    },
    skillrefresh: (state) => {
      return [];
    },
  },
});

export const { skillsaddition, skillsdel, skillrefresh } =
  KeySkillsAddition.actions;

export default KeySkillsAddition.reducer;
