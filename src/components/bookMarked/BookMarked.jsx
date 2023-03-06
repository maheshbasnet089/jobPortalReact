import axios from "axios";
import React from "react";
import { baseUrl } from "../config";

const BookMarked = () => {
  const [jobs, setJobs] = React.useState([]);
  const fetchBookMarkedJobs = async (e) => {
    const res = await axios.get(`${baseUrl}user/getBookMarkedJobs`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    if (res.data.status === 200) {
      setJobs(res.data.bookmarked);
      console.log(jobs);
    }
  };

  React.useEffect(() => {
    fetchBookMarkedJobs();
  }, []);
  return (
    <div class="p-10">
      <h2 class="mb-3">My Bookmarked Jobs</h2>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      jobTitle
                    </th>
                    <th scope="col" class="px-6 py-4">
                      location
                    </th>
                    <th scope="col" class="px-6 py-4">
                      industry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => {
                    {
                      console.log(job);
                    }
                    return (
                      <tr
                        key={job._id}
                        class="border-b dark:border-neutral-500"
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {index}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job.jobId.title}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job.jobId.location}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {job.jobId.industry}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarked;
