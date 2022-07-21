import { createSlice } from "@reduxjs/toolkit";

import { studentData } from "../StudentData";

const initialState = {
  isFormOpen: false,
  studentData: studentData,
  editedStudent: null,

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
    openForm: (state, action) => {
      const item = action.payload;
      if (item === "add-btn") {
        state.editedStudent = null;
      } else {
        const modifyStudent = state.studentData.filter(
          (student) => student.id === parseFloat(item)
        );

        state.editedStudent = modifyStudent[0];
      }

      state.isFormOpen = true;
    },
    addStudent: (state, action) => {
      const newStudent = action.payload;

      const newStudentData = [...state.studentData, newStudent];

      console.log(newStudent);
      state.studentData = newStudentData;
    },
    editStudent: (state, action) => {
      const editStudent = action.payload;
      console.log(editStudent);
      const newStudentData = [];
      state.studentData.map((item) => {
        if (item.id == editStudent.id) {
          newStudentData.push(editStudent);
        } else {
          newStudentData.push(item);
        }
      });

      state.studentData = newStudentData;
    },
    cancelForm: (state) => {
      state.isFormOpen = false;
    },
    deleteStudent: (state, action) => {
      const item = action.payload;
      const newStudentData = state.studentData.filter(
        (student) => student.id !== item.id
      );
      newStudentData.forEach((item, index) => {
        item.id = index + 1;
      });
      console.log(newStudentData);
      state.studentData = newStudentData;
    },
  },
});

export const { addStudent, editStudent, cancelForm, deleteStudent, openForm } =
  studentForm.actions;
export default studentForm.reducer;
