import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { studentData } from "../StudentData";

const initialState = {
  value: false,
  studentData: studentData,
};

export const studentForm = createSlice({
  name: "studentForm",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = action.payload;
      state.value = true;
      console.log(console.log(newStudent));
    },
    editStudent: (state) => {
      state.value = true;
    },
    cancelForm: (state) => {
      state.value = false;
    },
    deleteStudent: (state, action) => {
      const item = action.payload;
      const newStudentData = state.studentData.filter(
        (student) => student.id !== item.id
      );
      console.log(newStudentData);
      state.studentData = newStudentData;
    },
  },
});

export const { addStudent, editStudent, cancelForm, deleteStudent } =
  studentForm.actions;
export default studentForm.reducer;
