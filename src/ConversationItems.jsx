import React from "react";
import { useNavigate } from "react-router-dom";

function ConversationItems({ props }) {
  var navigation = useNavigate();
  return (
    <>
      <div
        className="conversation-container"
        onClick={() => navigation("chats")}
      >
        <p className="con-icon">{props.name[0]}</p>
        <p className="con-title">{props.name}</p>
        <p className="con-lastmsg">{props.lastmsg}</p>
        <p className="con-timestamp">{props.timestamp}</p>
      </div>
    </>
  );
}

export default ConversationItems;
