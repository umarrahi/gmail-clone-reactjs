import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { RiQuestionLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            className="w-8"
          />
          <h1 className="text-2xl text-gray-600 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-3 py-3 rounded-full gap-2">
          <IoSearchSharp size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RiQuestionLine size={"22px"} className="text-gray-600" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineSettings size={"22px"} className="text-gray-600" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <TbGridDots size={"22px"} className="text-gray-600" />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
