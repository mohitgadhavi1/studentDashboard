import { createSlice } from "@reduxjs/toolkit";

import { studentData } from "../StudentData";

const initialState = {
  value: false,
  studentData: studentData,
  result: studentData.forEach((item) => {
    if (item.score >= 30) {
      return (item.result = "Passed");
    } else {
      return (item.result = "Failed");
    }
  }),
  grade: studentData.forEach((item) => {
    if (item.score <= 30) {
      return (item.grade = " Poor");
    } else if (item.score > 30 && item.score <= 75) {
      return (item.grade = "Average");
    } else {
      return (item.grade = "Excellent ");
    }
  }),
};

export const studentForm = createSlice({
  name: "studentForm",
  initialState,
  reducers: {
    openForm: (state) => {
      state.value = true;
    },
    addStudent: (state, action) => {
      const newStudent = action.payload;

      const newStudentData = [...state.studentData, newStudent];

      console.log(newStudent);
      state.studentData = newStudentData;
      state.result = state.studentData.forEach((item) => {
        if (item.score >= 30) {
          return (item.result = "Passed");
        } else {
          return (item.result = "Failed");
        }
      });
      state.grade = state.studentData.forEach((item) => {
        if (item.score <= 30) {
          return (item.grade = " Poor");
        } else if (item.score > 30 && item.score <= 75) {
          return (item.grade = "Average");
        } else {
          return (item.grade = "Excellent ");
        }
      });
    },
    editStudent: (state, action) => {
      const item = action.payload;
      console.log(item);
    },
    cancelForm: (state) => {
      state.value = false;
    },
    deleteStudent: (state, action) => {
      const item = action.payload;
      const newStudentData = state.studentData.filter(
        (student) => student.id !== item.id
      );
      // console.log(newStudentData);
      state.studentData = newStudentData;
    },
  },
});

export const { addStudent, editStudent, cancelForm, deleteStudent, openForm } =
  studentForm.actions;
export default studentForm.reducer;
