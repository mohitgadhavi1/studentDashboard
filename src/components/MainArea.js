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
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>
          Add
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

                  <td className="modify-btn">
                    <button
                      id={item.id}
                      onClick={(e) => {
                        return dispatch(openForm(e.target.id));
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 16.25H4.66667L14.7708 6.14584L14.3125 5.6875L13.8542 5.22917L3.75 15.3333V16.25ZM2.5 17.5V14.8333L14.75 2.58334C14.9861 2.34722 15.2812 2.23264 15.6354 2.23959C15.9896 2.24653 16.2847 2.36806 16.5208 2.60417L17.4167 3.5C17.6528 3.73611 17.7708 4.02778 17.7708 4.375C17.7708 4.72222 17.6528 5.01389 17.4167 5.25L5.16667 17.5H2.5ZM16.4583 4.35417L15.6042 3.5L16.4583 4.35417ZM14.7708 6.14584L14.3125 5.6875L13.8542 5.22917L14.7708 6.14584Z"
                          fill="#2CA4D8"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        return onDeleteObject(item);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.25 16.25H13.75V6.25H6.25V16.25ZM4.375 4.58333V3.33333H7.16667L8 2.5H12L12.8333 3.33333H15.625V4.58333H4.375ZM6.25 17.5C5.91667 17.5 5.625 17.375 5.375 17.125C5.125 16.875 5 16.5833 5 16.25V5H15V16.25C15 16.5833 14.875 16.875 14.625 17.125C14.375 17.375 14.0833 17.5 13.75 17.5H6.25ZM6.25 16.25H13.75H6.25Z"
                          fill="#2CA4D8"
                        />
                      </svg>
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
