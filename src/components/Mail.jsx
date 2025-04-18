import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BiArchiveIn,
  BiDotsVerticalRounded,
  BiLeftArrowAlt,
  BiTrash,
} from "react-icons/bi";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import {
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";
import { RiErrorWarningLine, RiFolderTransferLine } from "react-icons/ri";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/* Header icon */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={()=>navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <BiLeftArrowAlt size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <RiErrorWarningLine size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiTrash size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiDotsVerticalRounded size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 text-sm">1-50 of 1000</p>
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            <LiaAngleLeftSolid size={"20px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            <LiaAngleRightSolid size={"20px"} />
          </button>
        </div>
      </div>
      {/* Email body */}
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5  text-sm">
            <p>18-Apr-2025</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>umarrahi@gmail.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>Message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
