import { configureStore } from "@reduxjs/toolkit";
import DetailsIndex from "./Slice/DetailsIndex";
import ExpAddition from "./Slice/Expaddition";
import KeySkillsAddition from "./Slice/KeySkillsAddition";
import AllData from "./Slice/AllData";
import IDselector from "./Slice/IDselector";
import FileName from "./Slice/FileName";
import MyResumeData from "./Slice/HandleMyResume";
import ModelHandler from "./Slice/ModalSlice";
import PreviewVisiblity from "./Slice/PreviewVisibility";

export const Store = configureStore({
  reducer: {
    i: DetailsIndex,
    add: ExpAddition,
    skill: KeySkillsAddition,
    data: AllData,
    IDselector: IDselector,
    f: FileName,
    myresumedata: MyResumeData,
    Modalhandler: ModelHandler,
    visbile: PreviewVisiblity,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
