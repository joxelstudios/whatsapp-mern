import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  SettingsInputAntenna,
  Mic,
} from "@material-ui/icons";
import { ChatBubble } from "./components/chatBubble/ChatBubble";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <ChatBubble />
        <ChatBubble receiver />
        <ChatBubble />
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e: any) => SettingsInputAntenna(e.target.value)}
          />
          <button
            // onClick={sendMessage}
            type="submit"
          >
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};
