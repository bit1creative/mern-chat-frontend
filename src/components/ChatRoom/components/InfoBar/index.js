import React from "react";
import { Link } from "react-router-dom";
import { AiFillWechat } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { triggerContacts } from "../../../../store/features/showContactsSlice";

const InfoBar = ({ room }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-row justify-between bg-custom-pinker text-gray-100">
        <div className="flex flex-row truncate">
          <div className="text-4xl p-2">
            <AiFillWechat />
          </div>
          <h3 className="align-middle my-auto">{room.trim()}</h3>
        </div>
        <div className="my-auto px-4 flex flex-row">
          <button
            className="mx-4 focus:outline-none"
            onClick={() => dispatch(triggerContacts())}
          >
            <FiUsers className="text-xl" />
          </button>
          <Link to={`/`} className="text-gray-100 text-xl">
            {/* <a href="/" className="text-gray-100 text-xl"> */}
            <BsFillBackspaceFill className="mx-auto" />
            {/* </a> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
