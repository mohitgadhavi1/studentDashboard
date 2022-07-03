import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="head">
        <h2>school space</h2>
      </div>
      <div className="list-items">
        <a href="">Dashboard</a>
        <a href="">Courses</a>
        <a href="">Students</a>
        <a href="">Exams</a>
        <a href="">Results</a>
        <a href="">Notice Board</a>
        <a href="">Live Classes</a>
        <a href="">Notifications</a>
      </div>
      <div className="profile-link">
        <h3>Andy sanberg</h3>
        <a href="">andysanburg@gmail.com</a>
        <button>VIEW PROFILE</button>
      </div>
    </div>
  );
}

export default Sidebar;
