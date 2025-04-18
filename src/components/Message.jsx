import React from "react";
import { BiSquareRounded, BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();
  const openMail = () => {
    navigate("/mail/293jflasll")
  };

  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <BiSquareRounded size={"20px"} />
        </div>
        <div className="flex-none text-gray-300">
          <BiStar size={"20px"} />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">Time ayega</div>
    </div>
  );
};

export default Message;
