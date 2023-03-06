import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../config";
import Footer from "../Footer";
import Navbar from "../Navbar";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const checkUser = () => {
    var x = localStorage.getItem("token");
    if (x === "") {
      window.location.href = "/login";
    }
  };
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    const res = await axios.get(`${baseUrl}user/profile`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    setProfile(res.data.profile[0]);
    localStorage.setItem("avatar", res.data.profile[0].picture);
    localStorage.setItem("name", res.data.profile[0].name);
  };

  React.useEffect(() => {
    checkUser();
    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="md:p-16 p-5">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid md:grid-cols-3 grid-cols-1 text-center order-last md:order-first mt-10 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {profile ? profile.experience : ""}
                </p>
                <p className="text-gray-400">Experience</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {profile ? profile.projects : ""}
                </p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">
                  {profile ? profile.level : ""}
                </p>
                <p className="text-gray-400">Level</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src={
                    profile
                      ? profile.picture
                      : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  }
                  className="rounded-full w-48 h-48"
                />
              </div>
            </div>

            <div className="flex md:justify-end justify-center md:pt-0 pt-[120px]">
              <EditProfile setShowModal={setShowModal} showModal={showModal} />
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="md:text-4xl text-2xl font-medium text-gray-700">
              {profile ? profile.name : ""}

              {/* <span className="font-light text-gray-500">22</span> */}
            </h1>
            <p className="font-light text-gray-600 mt-3">
              {profile ? profile.address : ""}
            </p>
            <p className="mt-8 text-black font-bold">
              {profile ? profile.designation : ""}
            </p>
            
          </div>
          <div className="space-x-8 flex justify-between mt-10 md:mt-0 md:justify-center pt-6">
            <Link to="/resume" className="text-non">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                My CV
              </button>
            </Link>
            <Link to="/cv">
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                create
              </button>
            </Link>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              {profile ? profile.description : ""}
            </p>
            {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
