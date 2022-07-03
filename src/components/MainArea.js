import React,{useState} from "react";
import "./MainArea.css";

const studentData = [
  {
    id: 1,
    name: "Robrt Fox",
    class: 7,
    score: 78,
  },
  {
    id: 2,
    name: "Ralph Edwards",
    class: 7,
    score: 20,
  },
  {
    id: 3,
    name: "Esther Howards",
    class: 9,
    score: 60,
  },
  {
    id: 4,
    name: "Eleanor pena",
    class: 8,
    score: 60,
  },
  {
    id: 5,
    name: "Arlene McCoy",
    class: 7,
    score: 85,
  },
  {
    id: 6,
    name: "Marvin Mckinney",
    class: 9,
    score: 25,
  },
  {
    id: 7,
    name: "Wade Warren",
    class: 7,
    score: 90,
  },
];

function MainArea() {
  return (
    <div className="mainArea">
      <div className="top">
        <h3>Students</h3>
        <button className="add-btn">+Add</button>
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
