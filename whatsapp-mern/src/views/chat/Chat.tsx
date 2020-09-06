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
import axios from "../../api/axios";


export const Chat = ({messages}:any) => {
  const [input, setInput] = React.useState("");

  const sendMessage = async (e : React.FormEvent) =>{
    e.preventDefault()
    await axios.post('/messages/new', {
      message: input,
      name: "Demo App",
      timestamp: "Just Now",
      received: false
    })
    
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://api.adorable.io/avatars/285/joel.png"/>
        <div className="chat__headerInfo">
          <h3>Joel Ramirez</h3>
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
        {messages.map((messageProps : any) => (
          <ChatBubble {...messageProps}/>
        ))}
        
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            value={input}
            placeholder="Type a message"
            onChange={(e: any) => setInput(e.target.value)}
          />
          <button
            onClick={sendMessage}
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
