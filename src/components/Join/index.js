import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/features/userNameSlice";

const Join = ({ location }) => {
  const name = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [room, setRoomName] = useState(
    location?.state?.roomName ? location?.state?.roomName : ""
  );

  // function setViewHeight() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }

  // useEffect(() => {
  //   setViewHeight();
  //   window.addEventListener("resize", () => {
  //     setViewHeight();
  //   });
  // }, []);

  return (
    <div className="w-full h-screen bg-black bg-opacity-80 overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="font-thin text-2xl text-gray-200 w-5/12 md:w-3/12 lg:w-2/12 text-center py-2 border-b">
          <h1>Join</h1>
        </div>
        <input
          required
          className="w-5/12 md:w-3/12 lg:w-2/12 my-4 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin"
          placeholder="Enter your name"
          type="text"
          onChange={(event) => dispatch(setUserName(event.target.value))}
        />
        <input
          required
          className="w-5/12 md:w-3/12 lg:w-2/12 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin"
          placeholder="Enter room name"
          value={room}
          type="text"
          onChange={(event) => setRoomName(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?room=${room}`}
        >
          <button
            className="focus:outline-none outline-none my-4 border py-2 px-8 rounded-xl text-gray-200 hover:bg-white hover:text-gray-700"
            type="submit"
          >
            Join chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
