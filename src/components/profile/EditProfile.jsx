import axios from "axios";
import React from "react";
import { baseUrl } from "../config";

const EditProfile = ({ showModal, setShowModal }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [image, setImage] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [project, setProject] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [description, setDescription] = React.useState("");

  const createProfile = async (req, res) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("designation", designation);
    formData.append("experience", experience);
    formData.append("picture", image);
    formData.append("address", address);
    formData.append("projects", project);
    formData.append("level", level);
    formData.append("description", description);

    try {
      const res = await axios.post(`${baseUrl}user/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
      });
      if (res.data.status == 200) {
        setShowModal(false);
        window.location.reload();
      }
      console.log(res.data);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <button
        // style={{background:"blue"}}
        // className="text-white  uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-sm transition transform hover:-translate-y-0.5"
        data-ripple-light="true"
        type="button"
        onClick={() => setShowModal(true)}
        id="edit"
      >
        Edit Profile
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center bg-gray-300 bg-opacity-80   items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className={showModal ? "relative shadow dark:bg-gray-700" : " "}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add your Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-[15px] block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                    onSubmit={createProfile}
                  >
                    <div className="flex gap-3">
                      <div>
                        <label className="block text-black text-sm font-bold mb-1">
                          Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          Age
                        </label>
                        <input
                          type="number"
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setAge(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          Designation
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setDesignation(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          Experience
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setExperience(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-black text-sm font-bold mb-1">
                          Address
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          projects
                        </label>
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setProject(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          level
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setLevel(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          Description
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <label className="block text-black text-sm font-bold mb-1">
                      Profile Image
                    </label>
                    <input
                      type="file"
                      className="shadow appearance-none border rounded  py-2 px-1 text-black"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={createProfile}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditProfile;
