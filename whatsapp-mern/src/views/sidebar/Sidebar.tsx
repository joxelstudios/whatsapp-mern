import React from "react";
import "./Sidebar.css";
import {
  DonutLarge,
  MoreVert,
  Chat,
  SearchOutlined,
} from "@material-ui/icons/";
import { IconButton, Avatar, Input } from "@material-ui/core";
import { SidebarChat } from "./components/sidebarChat/SidebarChat";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://api.adorable.io/avatars/285/joel.png"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat." type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat avatar="https://api.adorable.io/avatars/285/james.png" roomName="James" lastMessage="Hey it's James!"/>
        <SidebarChat avatar="https://api.adorable.io/avatars/285/jesse.png" roomName="Jesse" lastMessage="Yo, what's up?"/>
        <SidebarChat avatar="https://api.adorable.io/avatars/285/rick.png" roomName="Rick" lastMessage="This is your Fire Lord."/>
      </div>
    </div>
  );
};
