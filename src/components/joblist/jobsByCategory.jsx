import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Filter from "./Filter";
import JobList from "./JobList";
import JobListByCategory from "./jobListByCategory";

let jobs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1674786272837-1017cad0f47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    designation: "java developer",
    company_name: "HUncha digital",
    location: "itahari-7, kheti khola",
    job_type: "Full Time",
    salary: "40000",
    application_deadline: " 2023-2-13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore",
    category: "finance",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    designation: "javascript developer",
    company_name: "Hello digital",
    location: "itahari-8, kheti khola",
    job_type: "Part Time",
    salary: "20000",
    application_deadline: " 2023-2-12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore",
    category: "information technology",
  },
];

const JobsByCategory = () => {
  const [filteredCategory, setFilteredCatgory] = useState();

  const [filteredSearch, setFilteredSearch] = useState();

  const handleChange = (filtered) => {
    setFilteredCatgory(filtered);
  };

  const handleSearch = (search) => {
    setFilteredSearch(search);
  };

  const [allFilter, setAllFilter] = useState(jobs);

  const applyFilter = useCallback(() => {
    let update = jobs;
    if (filteredCategory) {
      update = update.filter((f) => f.category === filteredCategory);
    }
    if (filteredSearch) {
      update = update.filter(
        (f) =>
          f.designation
            .toLowerCase()
            .search(filteredSearch.toLowerCase().trim()) !== -1
      );
    }
    setAllFilter(update);
  }, [filteredCategory, filteredSearch, jobs]);

  useEffect(() => {
    console.log('hello')
    applyFilter();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-8 w-[90%] m-auto">
        <div>
          <Filter
            jobs={jobs}
            handleChange={handleChange}
            handleSearch={handleSearch}
          />
        </div>
        <div className="flex-1">
          <JobListByCategory jobs={allFilter} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsByCategory;
