import React, { useState } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import ConversationItems from "./ConversationItems";
import { useNavigate } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Sidebar() {
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
  const [lightTheme, setLightTheme] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <div className={"sb-header" + (lightTheme ? "" : " dark")}>
          <div>
            <IconButton>
              <AccountCircleIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            </IconButton>
          </div>
          <div className="other-icons">
            <IconButton>
              <GroupAddIcon
                onClick={() => navigate("groups")}
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            </IconButton>
            <IconButton>
              <GroupIcon
                onClick={() => navigate("users-groups")}
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            </IconButton>
            <IconButton>
              <AddBoxIcon
                onClick={() => navigate("create-groups")}
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                setLightTheme((prevValue) => {
                  return !prevValue;
                });
              }}
            >
              {lightTheme && (
                <NightlightIcon
                  className={"icon" + (lightTheme ? "" : " dark")}
                />
              )}
              {!lightTheme && (
                <WbSunnyIcon className={"icon" + (lightTheme ? "" : " dark")} />
              )}
            </IconButton>
          </div>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder="Search" className="search" />
        </div>
        <div className="sb-conversation">
          {conversation.map((conversation) => {
            return (
              <ConversationItems props={conversation} key={conversation.name} />
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default Sidebar;
