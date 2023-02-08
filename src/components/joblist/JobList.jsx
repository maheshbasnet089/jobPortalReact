import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineTimerOff } from "react-icons/md";
import ApplyModal from "./ApplyModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";

const JobList = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(baseUrl + "job/alljobs", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);

      setJobs(res.data.jobs);
      console.log(res.data.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const navigate = useNavigate();
  let login = localStorage.getItem("token") ? true : false;

  return (
    <div className="pt-6 pb-10">
      <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="grid gap-[30px]">
          {jobs.length !== 0 ? (
            jobs.map((job) => {
              return (
                <div className="border-b pb-8" key={job._id}>
                  <div className="flex flex-wrap gap-3">
                    <img src={job.image} className="w-[120px] h-[120px]" />
                    <div>
                      <div className="flex flex-wrap">
                        <h4 className="text-[20px]">{job.designation}</h4>{" "}
                        <span className="text-[20px] text-gray-400">
                          @{job.companyName}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-[12px] ">
                        <div className="flex items-center gap-1">
                          <GoLocation className="text-[14px] text-gray-400" />
                          <p className="text-gray-400">{job.location}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <BiTimeFive className="text-[14px] text-gray-400" />
                          <p className="text-gray-400">{job.jobType}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegMoneyBillAlt className="text-[14px] text-gray-400" />
                          <p className="text-gray-400">{job.salary}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <MdOutlineTimerOff className="text-[14px] text-gray-400" />
                          <p className="text-gray-400">
                            Application Deadline: {job.deadLine}
                          </p>
                        </div>
                      </div>
                      <p className="text-[13px] pt-2">{job.description}</p>
                      <div className="flex gap-3 pt-2">
                        {login && (
                          <ApplyModal
                            setShowModal={setShowModal}
                            showModal={showModal}
                          />
                        )}

                        <button
                          onClick={() => navigate(`/single/${job._id}`)}
                          className="middle none center rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center h-[72vh]">
              <h4>Sorry!!! No Jobs Found.....</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
