import React from "react";
import { GoLocation } from "react-icons/go";
import { FcBriefcase, FcIphone } from "react-icons/fc";

const Resume = ({ cv }) => {
  console.log(cv);
  return (
    <div className=" pt-6">
      <div className="flex flex-wrap gap-x-[20px] p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        {/* image */}
        <div className="w-[200px] h-[200px]">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/195/304/original/bubbles-speech-hellow-png.png"
            className="w-[180px] h-[180px]"
          />
        </div>
        {/* detaisl */}
        <div>
          <div className="flex flex-wrap">
            <h4 className="text-[26px]">{cv.name}</h4>{" "}
            <span className="text-[26px] text-gray-400">@{cv.designation}</span>
          </div>
          <div className="grid gap-4 pt-6">
            <div className="flex">
              <GoLocation className="text-[20px] text-orange-400" />
              <p className="text-gray-400">location: {cv.location}</p>
            </div>
            <div className="flex">
              <FcIphone className="text-[20px] text-gray-400" />
              <p className="text-gray-400"> Phone Number: {cv.phone_number}</p>
            </div>
            <div className="flex">
              <FcBriefcase className="text-[20px] text-gray-400" />
              <p className="text-gray-400"> Email: {cv.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
