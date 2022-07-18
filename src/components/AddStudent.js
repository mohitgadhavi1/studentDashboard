import React from "react";
import "./AddStudent.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelForm, addStudent, editStudent } from "../redux/studentFormSlice";

function AddStudent() {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentForm.studentData);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newStudent = {};
    newStudent.id = studentData.length + 1;
    newStudent.name = e.target[0].value;
    newStudent.class = e.target[1].value;
    newStudent.score = e.target[2].value;
    dispatch(addStudent(newStudent));
  };
  return (
    <div className="form-wrapper">
      <h2>Add Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          STUDENT NAME
          <input type="text" name="name" />
        </label>
        <label htmlFor="">
          CLASS
          <input type="number" name="class" />
        </label>
        <label htmlFor="">
          SCORE
          <input type="number" name="score" value="0" />
        </label>

        <div>
          <p>RESULT</p>
          <span>-</span>
          <p>GRADE</p>
          <span>-</span>
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

export default AddStudent;
