import React from "react";
import "./App.css";

function Messageothers() {
  var props1 = { name: "randomuser", message: "this is a random message" };
  return (
    <>
      <div className="other-message-container">
        <div className="conversation-container">
          <p className="con-icon">{props1.name[0]}</p>
        </div>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastmessage">{props1.message}</p>
          <p className="self-timestamp">12:00 pm</p>
        </div>
      </div>
    </>
  );
}

export default Messageothers;
