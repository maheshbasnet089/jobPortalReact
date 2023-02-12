import React, { useEffect, useRef, useState } from "react";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { FaIndustry, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineTimerOff } from "react-icons/md";
import { FcBriefcase, FcBookmark } from "react-icons/fc";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import { BsFillFilePostFill, BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import ApplyModal from "../joblist/ApplyModal";

const JobTitle = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [job, setJob] = useState([]);

  const [company, setCompany] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cv, setCv] = useState(null);
  const [experience, setExperience] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [followersLength, setFollowersLength] = useState(0);

  const fetchJob = async () => {
    try {
      const res = await axios.get(baseUrl + `job/${id}`);
      console.log(res.data);
      setJob(res.data.data.job);
      setFollowersLength(res.data.data.job.userId.followers.length);
      setCompany(res.data.data.job.userId);
      setCompanyId(res.data.data.job.userId._id);
      console.log(companyId);
      // setCompanyId(res.data.job.userId._id.toString());
      // console.log(companyId);
      console.log(company);
      console.log(job);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
    if (!localStorage.getItem("token")) {
      document.getElementById("message").style.display = "none";
    }
    if (localStorage.getItem("isFollowed") == true) {
      document.getElementById("follow").style.display = "none";
      document.getElementById("unFollow").style.display = "block";
    } else {
      document.getElementById("follow").style.display = "block";
      document.getElementById("unFollow").style.display = "none";
    }
  }, []);
  const follow = async () => {
    const res = await axios.post(
      `${baseUrl}company/follow`,
      {
        companyId: companyId,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    if (res.data.status == 200) {
      localStorage.setItem("isFollowed", true);
      document.getElementById("follow").style.display = "none";
      document.getElementById("unFollow").style.display = "block";
      console.log(res.data);
    }
  };
  const unFollow = async () => {
    const res = await axios.post(
      `${baseUrl}company/unFollow`,
      {
        companyId: companyId,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    if (res.data.status == 200) {
      localStorage.setItem("isFollowed", false);

      document.getElementById("follow").style.display = "block";
      document.getElementById("unFollow").style.display = "none";
    }
    console.log(res.data);
  };
  const applyJob = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("image", cv);
      formData.append("experience", experience);
      formData.append("jobId", id);
      formData.append("companyId", company._id);
      const res = await axios.post(baseUrl + "appliedJob", formData, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);

      if (res.data.status == "success") {
        setShowModal(false);
        alert("Applied Successfully");
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const message = async () => {
    navigate(`/chat/${companyId}`);
  };

  let login = localStorage.getItem("token") ? true : false;

  return (
    <div className=" pt-6">
      <div className="flex flex-wrap gap-x-[20px] p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
        {/* image */}
        <div className="w-[200px] h-[200px]">
          <img src={job.image} className="w-[180px] h-[180px]" />
        </div>
        {/* detaisl */}
        <div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap">
              <h4 className="text-[26px]"> {job.title}</h4>{" "}
              <span className="text-[26px] text-gray-400">
                @{job.companyName}
              </span>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                id="follow"
                onClick={follow}
              >
                Follow
              </button>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                id="unFollow"
                onClick={unFollow}
              >
                UnFollow
              </button>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                id="message"
                onClick={message}
              >
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-6">
            <div className="flex">
              <GoLocation className="text-[20px] text-gray-400" />
              <p className="text-gray-400">{job.location}</p>
            </div>
            <div className="flex">
              <BiTimeFive className="text-[20px] text-gray-400" />
              <p className="text-gray-400">{job.jobType}</p>
            </div>
            <div className="flex">
              <FaRegMoneyBillAlt className="text-[20px] text-gray-400" />
              <p className="text-gray-400">{job.salary}</p>
            </div>
            <div className="flex">
              <MdOutlineTimerOff className="text-[20px] text-gray-400" />
              <p className="text-gray-400">
                {" "}
                Application Deadline: {job.deadLine}
              </p>
            </div>
          </div>
          {login && (
            <div className="flex flex-wrap gap-8 pt-6">
              <>
                <button
                  className="middle none center rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Apply now
                </button>
                {showModal ? (
                  <>
                    <div className="flex justify-center bg-gray-300 bg-opacity-80  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div
                        className={
                          showModal ? "relative shadow dark:bg-gray-700" : " "
                        }
                      >
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-3xl font=semibold">
                              Add your Info
                            </h3>
                            <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="text-black opacity-7 h-6 w-6 text-[15px] block bg-gray-400 py-0 rounded-full">
                                x
                              </span>
                            </button>
                          </div>
                          <div className="relative p-6 flex-auto">
                            <form
                              className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                              onSubmit={applyJob}
                            >
                              <label className="block text-black text-sm font-bold mb-1">
                                First Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                              <label className="block text-black text-sm font-bold mb-1">
                                Last Name
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                              <label className="block text-black text-sm font-bold mb-1">
                                Experience
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) => setExperience(e.target.value)}
                                required
                              />
                              <label className="block text-black text-sm font-bold mb-1">
                                CV
                              </label>
                              <input
                                type="file"
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) => setCv(e.target.files[0])}
                                required
                              />
                            </form>
                          </div>
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              onClick={applyJob}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </>
              <a className="relative flex w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-green-400 hover:text-black hover:bg-white">
                <FcBookmark className="text-[22px] " />{" "}
                <p className="pl-2">Bookmark</p>
              </a>
            </div>
          )}
        </div>
      </div>
      {/* description */}

      <div className="flex flex-wrap gap-4 pt-5">
        <div className="flex-1 pb-10">
          <div className="pt-6">
            <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h3 className="pb-5">Description</h3>
              <p className="text-sm">{job.description}</p>
              <h3 className="pb-5 pt-5">key Responsibilitie</h3>
              <p className="text-sm">{job.responsibilities}</p>

              <h3 className="pb-5 pt-5">Minimum Requirements</h3>
              <p className="text-sm">{job.requirements}</p>
            </div>
          </div>
        </div>
        <div className="xs:w-full sm:w-full md:w-[350px]">
          <div className="pt-6">
            <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h3>Company Info</h3>
              <div className="grid gap-3 pt-5">
                <p className="text-sm">Compnay Name: {company.name}</p>
                <p className="text-sm">Address: {company.address}</p>
                <p className="text-sm">Compnay SIze: {company.companySize}</p>
                <p className="text-sm">Industry: {company.industry}</p>
                <p className="text-sm">Phone: +1234 567 8910</p>
                <p className="text-sm">Email: {company.email}</p>
                <p className="text-sm">Website:{company.website}</p>
                <p className="text-sm">
                  Followers:
                  {followersLength}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
