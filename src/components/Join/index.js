import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoomName] = useState("");

  return (
    <div className="w-full h-screen bg-black bg-opacity-80">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="font-thin text-2xl text-gray-200 w-2/12 text-center py-2 border-b">
          <h1>Join</h1>
        </div>
        <input
          required
          className="w-2/12 my-4 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin"
          placeholder="Enter your name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          required
          className="w-2/12 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin"
          placeholder="Enter room name"
          type="text"
          onChange={(event) => setRoomName(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="focus:outline-none outline-none my-4 border py-2 px-8 rounded-xl text-gray-200 hover:bg-white hover:text-gray-700"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
