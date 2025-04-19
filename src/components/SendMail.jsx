import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SendMail = () => {
 
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.appSlice.open);

  return (
    <div
      className={`${isOpen  ? "block" : "hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className="flex items-center px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div onClick={()=> dispatch(setOpen(false))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input
          type="text"
          placeholder="To"
          className="outline-none py-1 border-b-1 border-gray-200"
        />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none py-1 border-b-1 border-gray-200"
        />
        <textarea
          name="message"
          placeholder=""
          cols={"30"}
          rows={"10"}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 font-medium text-white cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
