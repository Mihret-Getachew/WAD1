import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import News from "./News,";
// import Message from "./Message";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul className="nav nav-pills border-bottom mb-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="messages">
            Messages
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
