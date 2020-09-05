import React from "react";
import "./ChatBubble.css";

interface IChatBubbleProps {
  receiver?: boolean;
  message?: string;
  timestamp?: string;
}

export const ChatBubble = ({
  receiver,
}: IChatBubbleProps) => {
  return (
    <p className={`chat__message ${receiver ? "chat__receiver" : ""}`}>
      <span className="chat__name">User</span>
      This is a message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
