import React from "react";
import { MdWork } from "react-icons/md";

const WorkHistory = ({ workHistory }) => {
  console.log(workHistory);

  return (
    <div className="pt-6 pb-10">
      <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex text-[25px] gap-3 ">
          <MdWork className="text-green-500" />
          <h3 className="pb-5">Work History</h3>
        </div>
        {workHistory.map((work) => {
          console.log(work);
          return (
            <div className="grid gap-[30px]">
              <div className="border-b pb-8">
                <p>
                  {work.designation} @ {work.company_name}
                </p>
                <p>
                  {work.start_date} - {work.end_day}
                </p>
                <p className="text-sm">{work.Key_responsibilities}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHistory;
