import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineTimerOff } from "react-icons/md";
import ApplyModal from "./ApplyModal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";

const JobList = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [inputSearch, setInputSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

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
  const fetchCategories = async () => {
    const res = await axios.get(baseUrl + "company/category");
    console.log(res.data);
    setCategories(res.data.catgory);
  };
  const fetchJobsByCategory = async () => {
    try {
      const res = await axios.get(baseUrl + `job/category/${id}`);
      console.log(res.data);
      setJobs(res.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchJobsByCategory();
  }, []);
  const jobSearch = async (value) => {
    const res = await axios.post(`${baseUrl}job/search`, {
      search: value,
    });
    console.log(res.data);
    console.log(value);
    if (value !== "") {
      setJobs(res.data.jobs);
    } else {
      fetchJobs();
    }
  };
  const navigate = useNavigate();
  let login = localStorage.getItem("token") ? true : false;
  const searchByCategory = async (e) => {
    setSelectedValue(e.value);

    if (e.value) {
      const res = await axios.get(`${baseUrl}job/category/${e.value}`);
      console.log(res.data);
      setJobs(res.data.jobs);
    } else {
      fetchJobs();
    }
  };

  return (
    <>
      <div>
        <div className="pt-6">
          <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            {/* <input placeholder="search" /> */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Search
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search"
                onChange={(e) => jobSearch(e.target.value)}
              />
            </div>
            <h3>Category</h3>
            <div className="grid gap-3 pt-5">
              <div className="flex gap-1">
                {categories.map((category) => {
                  return (
                    <div key={category._id} className="flex items-center">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value={category.name}
                        checked={selectedValue === category.name}
                        onChange={(e) => searchByCategory(e.target)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {category.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                          {/* {login && (
                          <ApplyModal
                            setShowModal={setShowModal}
                            showModal={showModal}
                          />
                        )} */}

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
    </>
  );
};

export default JobList;
