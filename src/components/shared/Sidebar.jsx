import React, { useState } from "react";
import {
  BiPencil,
  BiStar,
  BiTimeFive,
  BiPaperPlane,
  BiFileBlank,
} from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbInbox } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/appSlice";

const sidebaItems = [
  {
    icon: <TbInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <BiStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <BiTimeFive size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <BiPaperPlane size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <BiFileBlank size={"20px"} />,
    text: "Draft",
  },
  {
    icon: <MdKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];
const Sidebar = () => {
  
  // const [open, setOpen] = useState(false); // This is the local state variable
  const dispatch = useDispatch();

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 py-4 px-6 text-[14px] rounded-2xl hover:shadow-md bg-[#C2E7FF] cursor-pointer"
        >
          <BiPencil size={"20px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {sidebaItems.map((item, index) => {
          return (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
