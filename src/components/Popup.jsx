/* eslint-disable no-unused-vars */
import React from "react";
import { IoCloseCircle, IoCloseCircleOutline } from "react-icons/io5";

const Popup = ({ handleOrderPopup, orderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm">
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white dark:bg-gray-950 dark:text-white duration-200 p-4 rounded-md
          shadow-md w-[300px] "
          >
            {/* header */}
            <div className="flex items-center justify-between">
              <h1 className="">Order Your Book</h1>
              <div className="">
                <IoCloseCircleOutline
                  onClick={() => handleOrderPopup(false)}
                  className="cursor-pointer text-2xl"
                />
              </div>
            </div>
            {/* form body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="dark:bg-gray-900 w-full p-2 mb-4 
                rounded-full dark:text-white border-gray-300
                 dark:border-gray-500 px-2 py-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="dark:bg-gray-900 w-full p-2 mb-4 
                rounded-full dark:text-white border-gray-300
                 dark:border-gray-500 px-2 py-1"
              />
              <input
                type="text"
                placeholder="Address"
                className="dark:bg-gray-900 w-full p-2 mb-4 
                rounded-full dark:text-white border-gray-300
                 dark:border-gray-500 px-2 py-1"
              />
              <div className="flex justify-center">
                <button
                  className="bg-primary px-4 py-2 rounded-full 
                hover:scale-105 duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
