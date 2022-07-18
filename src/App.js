import React, { useState } from "react";
import "./App.css";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import AddStudent from "./components/AddStudent";
import { useSelector } from "react-redux";

function App() {
  const isFormOpen = useSelector((state) => state.studentForm.isFormOpen);

  return (
    <div className="grid-container">
      <div className="item1">
        <Sidebar />
      </div>
      <div className="item2">
        <MainArea />
      </div>
      {isFormOpen && <AddStudent />}
    </div>
  );
}

export default App;
