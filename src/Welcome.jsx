import React from "react";
import welcome from "../icon/social-media.png";
import "./App.css";

function Welcome() {
  return (
    <>
      <div className="welcome-container">
        <img src={welcome} alt="welcome" className="welcome-image" />
        <p>View and chat directly to the people present in the chat room.</p>
      </div>
    </>
  );
}

export default Welcome;
