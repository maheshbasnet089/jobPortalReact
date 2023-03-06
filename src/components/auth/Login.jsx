import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { baseUrl } from "../config";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let loginData = {
      email: formData.email,
      password: formData.password,
    };
    console.log("s");
    await axios
      .post(baseUrl + "user/login", loginData)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          if (res.data.user.role) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role);

            document.cookie = `token = ${res.data.token}`;
            console.log(res.data.user);
            if (res.data.user.role === "company") {
              window.location.href = "/dashboard";
            } else {
              window.location.href = "/";
            }
          } else {
            alert("error while logging in");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithGoogle = async () => {
    window.location.href = "http://localhost:4000/auth/google";
    const res = await axios.get("http://localhost:4000/auth/google/callback", {
      withCredentials: true,
    });
    console.log(res);

    // navigate(`${baseUrl}/auth/google`);
  };

  return (
    <div>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
            {/* Patterns Background */}
            <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16" />
            <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16" />
            {/* END Patterns Background */}

            {/* Sign In Section */}
            <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                  <span>Job Search</span>
                </h1>
                <p className="text-gray-500">Welcome!! to Login Page</p>
              </div>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                <div className="p-5 lg:p-6 grow w-full">
                  <div className="sm:p-5 lg:px-10 lg:py-8">
                    <form
                      className="space-y-6"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="space-y-1">
                        <label htmlFor="email" className="font-medium">
                          Email
                        </label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="font-medium">
                          Password
                        </label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                          onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                        >
                          Sign In
                        </button>

                        <button
                          onClick={signInWithGoogle}
                          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 text-white hover:text-whitefocus:ring focus:ring-blue-500 focus:ring-opacity-50  active:border-blue-700 mt-4"
                        >
                          {/* <a href="http://localhost:4000/auth/google"> */}
                          Sign In With Google
                          {/* </a> */}
                        </button>

                        <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              id="remember_me"
                              name="remember_me"
                              className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            />
                            <span className="ml-2">Remember me</span>
                          </label>
                          <a
                            href=""
                            className="inline-block text-blue-600 hover:text-blue-400"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                  Don’t have an account yet?
                  <a
                    className="font-medium text-blue-600 hover:text-blue-400"
                    href="/register"
                  >
                    Join us today
                  </a>
                </div>
              </div>
              {/* END Sign In Form */}
            </div>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </div>
  );
};

export default Login;
