import React from "react";
import "./App.css";
import logo from "../icon/social-media.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Groups() {
  return (
    <>
      <div className="list-container">
        <div className="ug-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className="ug-title">Avilable Users</p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder="Search" className="search" />
        </div>
        <div className="ug-list">
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
