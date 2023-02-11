import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";

const AdminJobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const res = await axios.get(`${baseUrl}admin/jobs`);
    console.log(res.data);
    setJobs(res.data.jobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <h3 className="pb-4">Job List</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-6 py-3">
                Industry
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              return (
                <tr key={job._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {job.title}
                  </th>
                  <td className="px-6 py-4">{job.designation}</td>
                  <td className="px-6 py-4">{job.industry}</td>
                  <td className="px-6 py-4">{job.salary}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
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

export default AdminJobsTable;
