import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../config";

const RegisterAsCompany = () => {
  const [formsData, setFormsData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    website: "",
    size: "",
    industry: "",
  });

  const [error, setError] = useState({});
  const onchange = (e) => {
    const { name, value } = e.target;
    setFormsData({ ...formsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
   
    const data = new FormData(e.currentTarget);
    let formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      address: data.get("address"),
      phone: data.get("phone"),
      website: data.get("website"),
      size: data.get("size"),
      industry: data.get("industry"),
    };
    console.log(formData);
   
      await axios
        .post(baseUrl + "company/register", formData)
        .then((res) => {
          console.log(res.data);
        //   alert(res.data.msg);
            window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });

  };

  const Validate = (e) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.name) {
      errors.name = "Name is required";
    }
    // if (!e.email) {
    //   errors.email = "Email is required";
    // } else if (!regex.test(e.email)) {
    //   errors.email = "Enter a valid email !";
    // }
    if (!e.password) {
      errors.password = "Password is required";
    } else if (e.password.length < 8) {
      errors.password = "Password cannot be less than 8 characters";
    }
    if (!e.confPassword) {
      errors.confPassword = "Confirm Password is required";
    } else if (e.confPassword.length < 8) {
      errors.confPassword = "Confirm Password cannot be less than 8 characters";
    }
    return errors;
  };
  return (
    <div className="min-h-screen flex justify-center w-full">
      {/* Patterns Background */}
      {/* END Patterns Background */}

      {/* Sign In Section */}
      <div className=" ">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
            <span>Job Search</span>
          </h1>
          <p className="text-gray-500">Welcome, please sign in from here!!</p>
        </div>
        {/* END Header */}

        {/* Sign In Form */}
        <div className="flex flex-col  rounded shadow-sm bg-white w-[50em] overflow-hidden">
          <div className="p-5 lg:p-6 grow w-full">
            <div className="border border-gray-200 rounded-sm lg:py-8">
              <form
                className="space-y-6 flex flex-col justify-center items-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                {/* name */}

                <div className="flex gap-x-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium">
                      Name
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) => onchange(e)}
                    />
                   
                  </div>
                </div>
                <div className="flex  gap-x-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium">
                      Address
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-[230px] focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      id="name"
                      name="address"
                      placeholder="Enter your name"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="website" className="font-medium">
                      website
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="website"
                      name="website"
                      placeholder="Enter your website"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                </div>
                <div className="flex  gap-x-4">
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium">
                      Industry
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      id="name"
                      name="industry"
                      placeholder="Enter your name"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="size" className="font-medium">
                      Size of company
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="size"
                      id="size"
                      name="size"
                      placeholder="Enter your company size"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                </div>
                <div className="flex  gap-x-4">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="font-medium">
                      Phone
                    </label>
                    <input
                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone"
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
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
                      onChange={(e) => onchange(e)}
                    />
                    <p className="text-red-500">{error.name}</p>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 min-w-[15em] focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
            Already have an account?
            <a
              className="font-medium text-blue-600 hover:text-blue-400"
              href="/login"
            >
              click here
            </a>
          </div>
        </div>
        {/* END Sign In Form */}
      </div>
      {/* END Sign In Section */}
    </div>
  );
};

export default RegisterAsCompany;
