import React from "react";
import "./App.css";
import Sidebar from "./sidebar";
import { useState } from "react";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import Users_Groups from "./Users_Groups";
import { Outlet } from "react-router-dom";

function Maincontainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <Welcome /> */}
      {/* <Chatarea props={conversation[0]} /> */}
      {/* <Users_Groups /> */}
    </div>
  );
}

export default Maincontainer;
