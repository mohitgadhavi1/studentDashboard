import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const studentForm = createSlice({
  name: "studentForm",
  initialState,
  reducers: {
    addStudent: (state) => {
      state.value = true;
    },
    editStudent: (state) => {
      state.value = true;
    },
  },
});

export const { addStudent, editStudent } = studentForm.actions;
export default studentForm.reducer;
