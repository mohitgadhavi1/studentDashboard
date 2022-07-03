import React, { useState } from "react";
import "./App.css";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import AddStudent from "./components/AddStudent";

function App() {
  const [openStudentForm, setOpenStudentForm] = useState(false);
  return (
    <div className="grid-container">
      <div className="item1">
        <Sidebar />
      </div>
      <div className="item2">
        <MainArea setOpenStudentForm={setOpenStudentForm} />
      </div>
      {openStudentForm && <AddStudent setOpenStudentForm={setOpenStudentForm}/>}
    </div>
  );
}

export default App;
