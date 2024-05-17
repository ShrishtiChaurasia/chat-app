import { IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Messageself from "./Messageself";
import Messageothers from "./Messageothers";

function Chatarea() {
  const [conversation, setConversation] = useState([
    {
      name: "sonu",
      lastmsg: "last message #1",
      timestamp: "today",
    },
    {
      name: "monu",
      lastmsg: "last message #2",
      timestamp: "today",
    },
    {
      name: "nunu",
      lastmsg: "last message #3",
      timestamp: "today",
    },
  ]);
  var props = conversation[0];
  return (
    <>
      <div className="chatarea-container">
        <div className="chatarea-header">
          <p className="con-icon">{props.name[0]}</p>
          <div className="header-text">
            <p className="con-title">{props.name}</p>
            <p className="con-timestamp">{props.timestamp}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="message-container">
          <Messageothers />
          <Messageself />
          <Messageothers />
          <Messageself />
          <Messageothers />
          <Messageself />
          <Messageothers />
          <Messageself />
          <Messageothers />
          <Messageself />
        </div>
        <div className="text-input-area">
          <input
            type="text"
            placeholder="Type your message"
            className="write-message"
          />
        </div>
      </div>
    </>
  );
}

export default Chatarea;
