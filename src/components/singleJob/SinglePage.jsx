import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

import JobTitle from "./JobTitle";


const SinglePage = () => {
  const id = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto">
        <JobTitle />
        
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
