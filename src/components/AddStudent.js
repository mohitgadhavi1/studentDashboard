import React from "react";
import "./AddStudent.css";

function AddStudent() {
  return (
    <div className="form-wrapper">
      <h2>Add Student</h2>
      <form className="student-form" action="">
        <label htmlFor="">
          STUDENT NAME
          <input type="text" />
        </label>
        <label htmlFor="">
          CLASS
          <input type="text" />
        </label>
        <label htmlFor="">
          SCORE
          <input type="text" />
        </label>
      </form>
      <div>
        <p>RESULT</p>
        <span>-</span>
        <p>GRADE</p>
        <span>-</span>
      </div>
      <div>
        <button>CANCEL</button>
        <button>CONFIRM</button>
      </div>
    </div>
  );
}

export default AddStudent;
