import React, { useState, useEffect } from "react";
import "./studentForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelForm,
  addStudent,
  editStudent,
  openForm,
} from "../redux/studentFormSlice";

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
  // console.log(editedStudent);

  useEffect(() => {
    if (editedStudent) {
      setValue({ ...editedStudent });
    }
  }, [editedStudent]);
  // console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newStudent = {};

    newStudent.id = editedStudent ? value.id : studentData.length + 1;
    newStudent.name = value.name;
    newStudent.class = value.class;
    newStudent.score = value.score;
    newStudent.result = value.result;
    newStudent.grade = value.grade;

    console.log(newStudent);
    dispatch(editedStudent ? editStudent(newStudent) : addStudent(newStudent));
    dispatch(cancelForm());
  };

  return (
    <div className="form-wrapper">
      <h2>Add Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          STUDENT NAME
          <input
            type="text"
            name="name"
            value={value.name}
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
            value={value.class}
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
            value={value.score}
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
          <span>{value.result}</span>
          <p>Grade:</p>
          <span>{value.grade}</span>
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
