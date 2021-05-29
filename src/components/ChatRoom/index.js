import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Redirect } from "react-router-dom";

import InfoBar from "./components/InfoBar";
import Input from "./components/Input";
import MessagesShowCase from "./components/MessagesShowCase";
import UsersShowCase from "./components/UsersShowcase";

import { useSelector } from "react-redux";

let socket;

const ChatRoom = ({ location }) => {
  const name = useSelector((state) => state.username).username;
  const [room, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [usersInChat, setUsersInChat] = useState([]);
  const [error, setError] = useState(null);
  // const ENDPOINT = "https://kinda-realtime-chat.herokuapp.com/";
  const ENDPOINT = "192.168.1.6:5000";

  useEffect(() => {
    const { room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket"] });

    setRoomName(room);

    socket.emit("join", { name, room }, (error) => {
      setError(error);
    });

    socket.on("loadMessageHistory", ({ messagesHistory }) => {
      setMessages([...messagesHistory]);
    });

    socket.on("getUsersInChat", ({ usersInChat }) => {
      setUsersInChat([...usersInChat]);
    });

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

  if (!name || error)
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { roomName: queryString.parse(location.search).room, error },
        }}
      />
    );
  return (
    <div className="h-screen bg-custom-lighter-pink bg-opacity-50 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col justify-between h-full lg:h-5/6 xl:h-3/4 w-full lg:w-6/12 bg-custom-lighter-pink">
        <InfoBar room={room}></InfoBar>
        <div className="md:hidden">
          <UsersShowCase users={usersInChat}></UsersShowCase>
        </div>
        <MessagesShowCase
          messages={messages}
          name={name}
          className="h-full"
        ></MessagesShowCase>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        ></Input>
      </div>
      <div className="hidden md:block w-full md:w-3/12 lg:w-2/12 h-1/2 md:h-full lg:h-5/6 xl:h-3/4">
        <UsersShowCase users={usersInChat}></UsersShowCase>
      </div>
    </div>
  );
};

export default ChatRoom;
