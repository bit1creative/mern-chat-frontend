import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";
import "./index.css";

const MessagesShowCase = ({ messages, name }) => (
  <ScrollToBottom
    followButtonClassName={"ScrollToBottomBtn"}
    className="w-full h-full overflow-hidden"
  >
    {messages.map((msg, i) => (
      <div key={i}>
        <Message message={msg} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default MessagesShowCase;
