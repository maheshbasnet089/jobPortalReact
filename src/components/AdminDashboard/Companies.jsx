import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import { baseUrl } from "../config";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const deleteCompany = async (id) => {
    const res = await axios.delete(`${baseUrl}admin/companies/${id}`);
    console.log(res.data);
    fetchCompanies();
  };
  const fetchCompanies = async () => {
    const res = await axios.get(`${baseUrl}admin/companies`);
    console.log(res.data);
    setCompanies(res.data.companies);
    console.log(companies);
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div>
      <h3 className="pb-4">Companies List</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Industry
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => {
              return (
                <tr
                  key={company._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {company.name}
                  </th>
                  <td className="px-6 py-4">{company.website}</td>
                  <td className="px-6 py-4">{company.industry}</td>
                  <td className="px-6 py-4">{company.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex text-[25px] gap-2">
                      <AiFillDelete
                        onClick={deleteCompany(company._id)}
                        className="cursor-pointer"
                      />
                      <AiFillDelete
                        onClick={deleteCompany(company._id)}
                        className="cursor-pointer"
                      />
                    </div>
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

export default Companies;
