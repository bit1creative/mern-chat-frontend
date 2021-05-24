import React from "react";

import { AiOutlineSend } from "react-icons/ai";

const Input = ({ message, setMessage, sendMessage }) => (
  <div className="flex flex-row w-full relative">
    <input
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
      type="text"
      placeholder="Start typing..."
      className="w-full p-2 focus:outline-none"
    />
    <button
      onClick={(event) => sendMessage(event)}
      className="absolute right-0 z-10 text-2xl text-green-600 p-2"
    >
      <AiOutlineSend />
    </button>
  </div>
);

export default Input;
