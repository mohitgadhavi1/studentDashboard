import React, { useState } from "react";
import "./App.css";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import StudentForm from "./components/StudentForm";
import { useSelector, useDispatch } from "react-redux";
import { cancelForm } from "./redux/studentFormSlice";

function App() {
  const isFormOpen = useSelector((state) => state.studentForm.isFormOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div className={"grid-container"}>
        <div className="item1">
          <Sidebar />
        </div>
        <div className="item2">
          <MainArea />
        </div>
      </div>
      {isFormOpen && <StudentForm />}
      {isFormOpen && (
        <div
          onClick={() => {
            dispatch(cancelForm());
          }}
          className="backDrop"
        ></div>
      )}
    </>
  );
}

export default App;
