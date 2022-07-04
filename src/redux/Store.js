import { configureStore } from "@reduxjs/toolkit";
import studentFormReducer from "./studentFormSlice";

export const store = configureStore({
  reducer: {
    studentForm: studentFormReducer,
  },
});
