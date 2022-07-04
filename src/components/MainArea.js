import React, { useState } from "react";
import "./MainArea.css";
import { studentData } from "../StudentData";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, editStudent } from "../redux/studentFormSlice";

function MainArea() {
  const [studentdata, setStudentData] = useState(studentData);
  const dispatch = useDispatch();
  const onDeleteObject = (item) => {
    let newstudentData = studentdata.filter((element) => {
      return element.id !== item.id;
    });
    setStudentData([...newstudentData]);
  };

  return (
    <div className="mainArea">
      <div className="top">
        <h3>Students</h3>
        <button className="add-btn" onClick={() => dispatch(addStudent())}>
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
            {studentdata.map((item) => {
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
                    <button onClick={() => {}}>Edit</button>
                    <button onClick={() => {}}>Delete</button>
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
