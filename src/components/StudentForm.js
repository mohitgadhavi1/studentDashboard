import React, { useState } from "react";
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
    newStudent.name = e.target[0].value;
    newStudent.class = e.target[1].value;
    newStudent.score = e.target[2].value;
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
              }));
            }}
          />
        </label>

        <div>
          <p>Result:</p>
          <span>{editedStudent ? editedStudent.result : ""}</span>
          <p>Grade:</p>
          <span>{editedStudent ? editedStudent.grade : ""}</span>
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
