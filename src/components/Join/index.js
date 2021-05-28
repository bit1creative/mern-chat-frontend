import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/features/userNameSlice";

import Alert from "@material-ui/lab/Alert";

const Join = ({ location }) => {
  const name = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [room, setRoomName] = useState(
    location?.state?.roomName ? location?.state?.roomName : ""
  );
  const [bgStyle, setBgStyle] = useState("bg-black bg-opacity-80");
  const [joinTextStyle, setJoinTextStyle] = useState("text-gray-200");
  const [inputStyle, setInputStyle] = useState(
    "bg-gray-200 placeholder-gray-600"
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
    <div className={`w-full h-screen overflow-hidden ${bgStyle}`}>
      <div className={`${location?.state?.error ? "block" : "hidden"}`}>
        <Alert severity="error">{location?.state?.error}</Alert>
      </div>
      <div className="h-full flex flex-col justify-center items-center transition">
        <div
          className={`font-thin text-2xl w-5/12 md:w-3/12 lg:w-2/12 text-center py-2 border-b ${joinTextStyle}`}
        >
          <h1>Join</h1>
        </div>
        <input
          required
          className={`w-5/12 md:w-3/12 lg:w-2/12 my-4 shadow rounded py-2 px-3 font-thin ${inputStyle}`}
          placeholder="Enter your name"
          type="text"
          onChange={(event) => dispatch(setUserName(event.target.value))}
        />
        <input
          required
          className={`w-5/12 md:w-3/12 lg:w-2/12 shadow rounded py-2 px-3 font-thin ${inputStyle}`}
          placeholder="Enter room name"
          value={room}
          type="text"
          onChange={(event) => setRoomName(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?room=${room}`}
          className="my-4"
        >
          <button
            className="focus:outline-none outline-none border py-2 px-8 rounded-xl text-gray-700 bg-gray-200 hover:bg-black hover:opacity-80 hover:text-gray-300"
            type="submit"
            onMouseEnter={() => {
              setBgStyle("bg-green-200 dark:bg-gray-700");
              setJoinTextStyle(
                "text-black text-opacity-80 border-black border-opacity-80"
              );
              setInputStyle(
                "bg-black bg-opacity-80 placeholder-gray-200 text-gray-200"
              );
            }}
            onMouseLeave={() => {
              setBgStyle("bg-black bg-opacity-80");
              setJoinTextStyle("text-gray-200");
              setInputStyle("bg-gray-200 placeholder-gray-600 text-gray-700");
            }}
          >
            Join chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
