import React from "react";
import "./ChatBubble.css";

interface IChatBubbleProps {
  name: string;
  message: string;
  timestamp: string;
  received?: boolean;
}

export const ChatBubble = ({name, message, timestamp, received}: IChatBubbleProps) => {
  return (
    <p className={`chat__message ${received ? "" : "chat__receiver"}`}>
      <span className="chat__name">{name}</span>
      {message}
      <span className="chat__timestamp">{timestamp}</span>
    </p>
  );
};
