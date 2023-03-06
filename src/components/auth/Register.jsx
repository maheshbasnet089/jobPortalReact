import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../config";

const Register = () => {
  const [formsData, setFormsData] = useState({
    name: "",
    email: "",
    password: "",
    consfPassword: "",
  });

  const [error, setError] = useState({});
  const onchange = (e) => {
    const { name, value } = e.target;
    setFormsData({ ...formsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let x = Validate(formsData);
    setError(x);
    const data = new FormData(e.currentTarget);
    let formData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confPassword"),
    };
    if (Object.keys(x).length === 0) {
      await axios
        .post(baseUrl + "user/register", formData)
        .then((res) => {
          alert(res.data.msg);
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error");
    }
  };

  const Validate = (e) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.name) {
      errors.name = "Name is required";
    }
    if (!e.email) {
      errors.email = "Email is required";
    } else if (!regex.test(e.email)) {
      errors.email = "Enter a valid email !";
    }
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
                <p className="text-gray-500">
                  Welcome, please sign in from here!!
                </p>
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
                      {/* name */}
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
                          required
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
                          required
                        />
                        <p className="text-red-500">{error.email}</p>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="font-medium">
                          Password
                        </label>
                        <input
                        required
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          onChange={(e) => onchange(e)}
                        />
                        <p className="text-red-500">{error.password}</p>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="font-medium">
                          Confirm Password
                        </label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                          type="password"
                          id="cpassword"
                          name="confPassword"
                          placeholder="Enter confirm password"
                          onChange={(e) => onchange(e)}
                          required
                        />
                        <p className="text-red-500">{error.confPassword}</p>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                 Register as a company
                  <a
                    className="font-medium text-blue-600 hover:text-blue-400"
                    href="/registerascompany"
                  >
                    click here
                  </a>
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
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </div>
  );
};

export default Register;
