import React, { useState } from "react";
import "./MainArea.css";
import { studentData } from "../StudentData";

function MainArea(props) {
  return (
    <div className="mainArea">
      <div className="top">
        <h3>Students</h3>
        <button
          className="add-btn"
          onClick={() => {
            props.setOpenStudentForm(true);
          }}
        >
          +Add
        </button>
      </div>
      <div className="table">
        <table id="customers">
          <tr>
            <th>No</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
            <th> </th>
          </tr>

          {studentData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.class}th</td>{" "}
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
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="bottom-comment"> showing 7 of 7 entries</div>
    </div>
  );
}

export default MainArea;
