import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="md:p-16 p-5">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid md:grid-cols-3 grid-cols-1 text-center order-last md:order-first mt-10 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">1 years+</p>
                <p className="text-gray-400">Experience</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">5+</p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">Intermediate</p>
                <p className="text-gray-400">Level</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  src="https://images.unsplash.com/photo-1675139380320-6ba6a0f6f8b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
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
              Sujan Chaudhary,{" "}
              <span className="font-light text-gray-500">22</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">
              Itahari-19, Nepal, Sunsari
            </p>
            <p className="mt-8 text-black font-bold">React Developer</p>
            <p className="mt-2 text-gray-500">Itahari International College</p>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, aliquid amet impedit ullam, quod eveniet natus
              suscipit dolorem ea perspiciatis necessitatibus pariatur nemo
              praesentium consectetur, eius vero fuga rem omnis.
            </p>
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
