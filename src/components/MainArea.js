import React, { useState } from "react";
import "./MainArea.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  editStudent,
  deleteStudent,
} from "../redux/studentFormSlice";

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
          onClick={() => {
            dispatch(addStudent());
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
                  {item.score >= 30 ? <td> Passed </td> : <td>Failed</td>}
                  <td>{item.score}/100</td>
                  {item.score <= 30 ? (
                    <td> Poor </td>
                  ) : item.score > 30 && item.score <= 75 ? (
                    <td> Average </td>
                  ) : (
                    <td> Excellent </td>
                  )}
                  <td>
                    <button onClick={() => dispatch(editStudent())}>
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
      <div className="bottom-comment"> showing 7 of 7 entries</div>
    </div>
  );
}

export default MainArea;
