import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "./components/InfoBar";
import Input from "./components/Input";
import MessagesShowCase from "./components/MessagesShowCase";

let socket;

const ChatRoom = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket"] });

    setName(name);
    setRoomName(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.disconnect();

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(messages);

  return (
    <div className="h-screen bg-green-200 flex justify-center items-center">
      <div className="flex flex-col justify-between h-2/4 w-6/12 2xl:w-4/12 mx-auto bg-gray-200">
        <InfoBar room={room}></InfoBar>
        <MessagesShowCase
          messages={messages}
          name={name}
          className=" scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800"
        ></MessagesShowCase>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        ></Input>
      </div>
    </div>
  );
};

export default ChatRoom;
