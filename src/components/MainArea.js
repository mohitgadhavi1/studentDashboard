import React, { useState } from "react";
import "./MainArea.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, openForm } from "../redux/studentFormSlice";

function MainArea() {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentForm.studentData);

  const onDeleteObject = (item) => {
    dispatch(deleteStudent(item));
  };

  return (
    <div className="mainArea">
      <div className="top">
        <h3>Students</h3>
        <button
          className="add-btn"
          onClick={(e) => {
            return dispatch(openForm(e.target.className));
          }}
        >
          +Add
        </button>
      </div>
      <div className="table">
        <table id="customers">
          <thead>
            <tr>
              <th>No</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Result</th>
              <th>Score</th>
              <th>Grade</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.class}th</td>

                  <td>{item.result}</td>
                  <td>{item.score}/100</td>
                  <td>{item.grade}</td>

                  <td>
                    <button
                      id={item.id}
                      onClick={(e) => {
                        return dispatch(openForm(e.target.id));
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        return onDeleteObject(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bottom-comment">
        {" "}
        showing {studentData.length} of {studentData.length} entries
      </div>
    </div>
  );
}

export default MainArea;
