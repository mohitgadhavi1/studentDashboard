import React from "react";
import "./App.css";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <div className="grid-container">
      <div className="item1">
        <Sidebar />
      </div>
      <div className="item2">
        <MainArea />
      </div>
      {/* <AddStudent /> */}
    </div>
  );
}

export default App;
