import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { baseUrl } from "../config";

const AddCategory = () => {
  const [Category, setCategory] = useState("");

  const [narr, setNArr] = useState([]);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Category === "") {
      alert("category field is required");
    } else {
      let arr = [...narr];
      arr.push(Category);
      setNArr(arr);
      alert("succes");
    }
  };
  const fetchCategory = async () => {
    try {
      const response2 = await axios.get(`${baseUrl}admin/category`);
      console.log(response2.data);
      setCategories(response2.data.catgory);
      console.log(categories);
    } catch (e) {
      alert(e.message);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const createCategory = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}admin/category`,
        {
          name,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      //get category

      console.log(res.data);
      setName("");
    } catch (e) {
      alert(e.message);
    }
  };
  const deleteCategory = async (id) => {
    const res = await axios.delete(`${baseUrl}admin/category/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
    fetchCategory();
  };
  return (
    <div>
      <h1>Add Category</h1>
      <div className="grid grid-cols-2 pt-4">
        <div>
          <div className="relative z-0 mb-6 group">
            <input
              type="text"
              value={name}
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Title
            </label>
          </div>
          <button
            onClick={(e) => createCategory(e)}
            className="bg-black hover:bg-gray-900 text-white text-center py-2 px-4 rounded"
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="pt-[50px]">
        <h3>Categories List</h3>
        <table className="w-full">
          <tbody>
            <tr className="bg-gray-200">
              <td className="p-2 w-1/2">id</td>
              <td className="p-2 w-1/2">Category name</td>
            </tr>
          </tbody>

          <tbody>
            {categories.map((category, index) => {
              return (
                <tr key={category._id} className="bg-white">
                  <td className="p-2 w-1/2">{index + 1}</td>
                  <td className="p-2 w-1/2">{category.name}</td>
                  <AiFillDelete
                    onClick={()=>deleteCategory(category._id)}
                    className="cursor-pointer"
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCategory;
