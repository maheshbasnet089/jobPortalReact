import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { baseUrl } from "../config";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState([]);
  const [companyName, setCompanyName] = useState("");

  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const editProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(baseUrl + "company/profile/edit", {
        name: companyName,
        industry: industry,
        companySize: companySize,
        address: address,
        email: email,

        website: website,
      },{
        headers: {
            "x-access-token": localStorage.getItem("token"),
            },
      });
      console.log(res.data);
      if (res.data.status == 200) {
        setProfile(res.data.company);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchProfile() {
    try {
      const res = await axios.get(baseUrl + "company/profile", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      if (res.data.status == 200) {
        setProfile(res.data.company);
        console.log(profile);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <div className="shadow-2xl">
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src="https://source.unsplash.com/100x100/?portrait?1"
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{profile.name}</h2>
              <span className="text-sm dark:text-gray-400">
                Industry: {profile.industry}
              </span>
              <p className="text-sm dark:text-gray-400">
                Comapny Size: {profile.companySize}
              </p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <CiLocationOn />
                <span className="dark:text-gray-400">{profile.address}</span>
              </span>
              <span className="flex items-center space-x-2">
                <AiOutlineMail />
                <span className="dark:text-gray-400">{profile.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                <AiOutlinePhone />
                <span className="dark:text-gray-400">+25 381 77 983</span>
              </span>
              <span className="flex items-center space-x-2">
                <AiOutlineGlobal />
                <span className="dark:text-gray-400">{profile.website}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 ">
        <div className="pb-8">
          <button
            className="bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded"
            onClick={() => setEdit(!edit)}
          >
            Edit Profile
          </button>
        </div>

        {edit && (
          <form className="shadow-2xl p-8" onSubmit={editProfile}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="companyName"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company Name
              </label>
            </div>
            {/* <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div> */}

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="address"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <label
                for="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => setIndustry(e.target.value)}
                />
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Industry
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <label
                  for="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Website
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              {/* <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div> */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) => setCompanySize(e.target.value)}
                />
                <label
                  for="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Size
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
