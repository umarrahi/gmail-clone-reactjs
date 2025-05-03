import React from "react";
import { BiSquareRounded, BiStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";

const Message = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedEmail(email))
    navigate(`/mail/${email.id}`);
  };

  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <BiSquareRounded size={"20px"} />
        </div>
        <div className="flex-none text-gray-300">
          <BiStar size={"20px"} />
        </div>
      </div>
      
      {/* Email content */}
      <div className="flex-1 ml-4">
        {/* <p className="text-gray-600 font-medium truncate">
          {email?.subject || "No subject"}
        </p> */}
        <p className="text-gray-600 truncate max-w-full">
          {email?.message || "No message"}
        </p>
      </div>

      {/* Timestamp */}
      <div className="flex-none text-gray-400 text-sm">
        <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Message;
