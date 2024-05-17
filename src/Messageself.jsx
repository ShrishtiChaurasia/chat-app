import React from "react";
import "./App.css";

function Messageself() {
  var props2 = { name: "you", message: "this is sample msg" };
  return (
    <>
      <div className="self-message-container">
        <div className="messageBox">
          <p>{props2.message}</p>
          <p className="self-timestamp">12:00 pm</p>
        </div>
      </div>
    </>
  );
}

export default Messageself;
