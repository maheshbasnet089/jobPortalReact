import React, { useState } from "react";

const Notification = ({ open, setOpen }) => {
  return (
    <div onClick={() => setOpen(!open)}>
      <div className="relative mt-2">
        <div className="absolute left-0 top-0  bg-red-500 rounded-full">
          <span className="text-sm text-white p-1">12</span>
        </div>
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-gray-600 w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Notification;
