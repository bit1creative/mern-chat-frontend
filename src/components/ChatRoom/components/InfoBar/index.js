import React from "react";
import { AiFillWechat, AiOutlineCloseCircle } from "react-icons/ai";

const InfoBar = ({ room }) => (
  <div className="w-full mx-auto h-1/6">
    <div className="w-full flex flex-row justify-between bg-green-400 text-gray-100">
      <div className="flex flex-row">
        <div className="text-4xl p-2">
          <AiFillWechat />
        </div>
        <h3 className="align-middle my-auto">{room}</h3>
      </div>
      <div className="my-auto px-4">
        <a href="/" className="text-gray-100 text-xl">
          <AiOutlineCloseCircle className="mx-auto" />
        </a>
      </div>
    </div>
  </div>
);

export default InfoBar;
