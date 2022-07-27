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
  const scoreCheck = Math.max(0, Math.min(100, Number(value.score)));
  return (
    <div className="form-wrapper">
      <h2>ADD STUDENT</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          STUDENT NAME*
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
          CLASS*
          <input
            type="number"
            name="class"
            value={value.class}
            onChange={(e) => {
              setValue((value) => ({
                ...value,
                class: Math.max(1, Math.min(12, Number(e.target.value))),
              }));
            }}
          />
          Please input values between 1 & 12
        </label>
        <label htmlFor="">
          SCORE*
          <input
            type="number"
            name="score"
            value={value.score}
            onChange={(e) => {
              setValue((value) => ({
                ...value,
                score: e.target.value,
                result: e.target.value >= 30 ? "Passed" : "Failed",
                grade:
                  e.target.value <= 30
                    ? "Poor"
                    : e.target.value > 30 && e.target.value <= 75
                    ? "Average"
                    : "Excellent ",
              }));
            }}
          />
          Please input values between 0 & 100
        </label>

        <div className="result-wrapper">
          <p>RESULT:</p>
          <span
            className={
              value.result == "Passed"
                ? "greenSpan"
                : value.result == "Failed"
                ? "redSpan"
                : ""
            }
          >
            {value.result || "-"}
          </span>
          <p>GRADE:</p>
          <span
            style={
              value.grade == "Poor"
                ? { color: "#F24643" }
                : { color: "#2CBF6E" }
            }
          >
            {value.grade || "-"}
          </span>
        </div>
        <div className="form-btn">
          <button
            className="cancel"
            onClick={() => {
              return dispatch(cancelForm());
            }}
          >
            CANCEL
          </button>
          <button
            disabled={
              value.score < 0 ||
              value.score > 100 ||
              value.score == "" ||
              value.class < 1 ||
              value.class > 12 ||
              value.name.length < 1
                ? true
                : false
            }
            type="submit"
            className="confirm"
          >
            CONFIRM
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
