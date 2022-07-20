import React, { useState, useEffect } from "react";
import "./studentForm.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelForm, addStudent, editStudent } from "../redux/studentFormSlice";

function StudentForm() {
  const [value, setValue] = useState({
    id: "",
    name: "",
    class: "",
    score: "",
    result: "",
    grade: "",
  });
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentForm.studentData);
  const editedStudent = useSelector((state) => state.studentForm.editedStudent);
  console.log(editedStudent);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newStudent = {};
    newStudent.id = studentData.length + 1;
    newStudent.name = value.name;
    newStudent.class = value.class;
    newStudent.score = value.score;
    newStudent.result = value.result;
    newStudent.grade = value.grade;
    dispatch(addStudent(newStudent));
  };
  console.log(value);

  return (
    <div className="form-wrapper">
      <h2>Add Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          STUDENT NAME
          <input
            type="text"
            name="name"
            value={editedStudent ? editedStudent.name : value.name}
            onChange={(e) => {
              setValue((value) => ({
                ...value,
                name: e.target.value,
              }));
            }}
          />
        </label>
        <label htmlFor="">
          CLASS
          <input
            type="number"
            name="class"
            value={editedStudent ? editedStudent.class : value.class}
            onChange={(e) => {
              setValue((value) => ({
                ...value,
                class: e.target.value,
              }));
            }}
          />
        </label>
        <label htmlFor="">
          SCORE
          <input
            type="number"
            name="score"
            value={editedStudent ? editedStudent.score : value.score}
            onChange={(e) => {
              setValue((value) => ({
                ...value,
                score: e.target.value,
                result: e.target.value >= 30 ? "passed" : "failed",
                grade:
                  e.target.value <= 30
                    ? " Poor"
                    : e.target.value > 30 && e.target.value <= 75
                    ? "Average"
                    : "Excellent ",
              }));
            }}
          />
        </label>

        <div>
          <p>Result:</p>
          <span>{editedStudent ? editedStudent.result : value.result}</span>
          <p>Grade:</p>
          <span>{editedStudent ? editedStudent.grade : value.grade}</span>
        </div>
        <div>
          <button
            onClick={() => {
              return dispatch(cancelForm());
            }}
          >
            CANCEL
          </button>
          <button type="submit">CONFIRM</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
