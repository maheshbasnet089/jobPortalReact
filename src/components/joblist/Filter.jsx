import React, { useState } from "react";

const Filter = ({ jobs, handleChange, handleSearch }) => {
  const [change, setChange] = useState();
  const [search, setSearch] = useState();

  const onChange = (e) => {
    setChange(e.target.value);
    handleChange(e.target.value);
  };

  const changeInput = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  console.log(search);

  return (
    <div className="pt-6">
      <div className=" p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        {/* <input placeholder="search" /> */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Search
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
            onChange={(e) => changeInput(e)}
          />
        </div>
        <h3>Category</h3>
        <div className="grid gap-3 pt-5">
          {jobs.map((job) => {
            return (
              <div key={job.id} className="flex gap-1">
                <div className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    checked={change?.includes(job.category)}
                    value={job.category}
                    onChange={(e) => onChange(e)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {job.category}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
