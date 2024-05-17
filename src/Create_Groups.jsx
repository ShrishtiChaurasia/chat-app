import React from "react";
import "./App.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { IconButton } from "@mui/material";

function Create_Groups() {
  return (
    <>
      <div className="creategroup-container">
        <div className="creategroup-search">
          <input
            type="text"
            placeholder="Enter your group name"
            className="group"
          />
          <IconButton>
            <DoneAllIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Create_Groups;
