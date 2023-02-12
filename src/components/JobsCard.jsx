import React, { useEffect, useState } from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrPersonalComputer } from "react-icons/gr";
import { FcSalesPerformance } from "react-icons/fc";
import { GiFarmTractor } from "react-icons/gi";
import axios from "axios";
import { baseUrl } from "./config";
import { useNavigate } from "react-router-dom";

const JobsCard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await axios.get(`${baseUrl}admin/category`);
    console.log(res.data);
    setCategories(res.data.catgory);
    console.log(categories);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-wrap w-[90%] m-auto gap-5 sm: justify-center   md:justify-between pt-8 ">
      {categories.map((category) => {
        return (
          <div className="shadow-2xl w-[200px] h-[200px] flex justify-center items-center flex-col" onClick={()=>navigate(`/jobs/${category.name}`)} >
            <div className="bg-green-600 h-20 w-20 rounded-full items-center flex justify-center border-black">
              <MdOutlineHomeWork className="text-sky-800 text-[30px]" />
            </div>
            <h3 className="text-center pt-2">{category.name}</h3>
            {/* <p className="text-center text-[10px]">(8100)</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default JobsCard;
