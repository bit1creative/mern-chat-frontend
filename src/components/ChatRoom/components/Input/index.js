import React from "react";

import { AiOutlineSend } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div>
      <div className="flex flex-row w-full relative">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
          type="text"
          placeholder="Start typing..."
          className="w-full p-4 md:p-2 focus:outline-none font-thin pr-20"
        />
        <button className="absolute z-10 right-8 text-2xl text-green-600 p-4 md:p-2 focus:outline-none">
          <GrEmoji />
        </button>
        <button
          onClick={(event) => sendMessage(event)}
          className="absolute right-0 z-10 text-2xl text-green-600 p-4 md:p-2 focus:outline-none"
        >
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Input;
