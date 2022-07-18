import React from "react";
import "./AddStudent.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelForm, addStudent, editStudent } from "../redux/studentFormSlice";

function AddStudent() {
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
  return (
    <div className="form-wrapper">
      <h2>Add Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          STUDENT NAME
          <input type="text" name="name" value={editedStudent.name} />
        </label>
        <label htmlFor="">
          CLASS
          <input type="number" name="class" value={editedStudent.class} />
        </label>
        <label htmlFor="">
          SCORE
          <input type="number" name="score" value={editedStudent.score} />
        </label>

        <div>
          <p>Result:</p>
          <span>{editedStudent.result}</span>
          <p>Grade:</p>
          <span>{editedStudent.grade}</span>
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
