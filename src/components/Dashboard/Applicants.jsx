import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../config";

const Applicants = () => {
  const [job, setJob] = React.useState([]);
  useEffect(() => {
    async function fetchJobs() {
      const res = await axios.get(baseUrl + "appliedJob/applicants", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setJob(res.data.applicants);
      // console.log(res.data.data.applicants);
      console.log(job);
    }

    fetchJobs();
  }, []);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Experience
              </th>
              <th scope="col" className="px-6 py-3">
                CV
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {job.map((jb) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={jb._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {jb.firstName}
                </th>
                <td className="px-6 py-4">{jb.lastName}</td>
                <td className="px-6 py-4">{jb.experience}</td>
                <td className="px-6 py-4">{jb.cv}</td>
                <td className="px-6 py-4">{jb.status}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Approve
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicants;
