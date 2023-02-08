import React from "react";
import FetauredCard from "./FetauredCard";

const FeturedJobs = () => {
  return (
    <div className="pt-20 pb-10 w-[86%] m-auto">
      <h1 className="text-center">Featured Jobs</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 pt-10">
        <FetauredCard />
        <FetauredCard />
        <FetauredCard />
        <FetauredCard />
        <FetauredCard />
      </div>
    </div>
  );
};

export default FeturedJobs;
