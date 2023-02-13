import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { baseUrl } from "../config";

const AdminUserTable = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const res = await axios.get(`${baseUrl}user/getUsers`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    setJobs(res.data.users);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const deleteJob = async (id) => {
    const res = await axios.delete(`${baseUrl}user/deleteUser/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    fetchJobs();
  };
  return (
    <div>
      <h3 className="pb-4">Job List</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                user_id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              return (
                <tr
                  key={job._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {job._id}
                  </th>
                  <td className="px-6 py-4">{job.name}</td>
                  <td className="px-6 py-4">{job.email}</td>
                  <td className="px-6 py-4">{job.role}</td>
                  <td className="px-6 py-4">
                    <AiFillDelete
                      onClick={() => deleteJob(job._id)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserTable;
