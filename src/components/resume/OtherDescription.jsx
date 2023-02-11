import React from "react";
import { ImUserTie } from "react-icons/im";

const OtherDescription = ({ cv }) => {
  console.log(cv);
  return (
    <div className="pt-6">
      <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex text-[25px] gap-3">
          <ImUserTie className="text-green-500" />
          <h3 className="pb-5">Career Objective</h3>
        </div>

        <p className="text-sm">
            {cv.career_objective}
        </p>
      </div>
    </div>
  );
};

export default OtherDescription;
