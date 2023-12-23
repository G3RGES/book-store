import React from "react";

import Vector from "../assets/vector3.png";
// import { GrSecure } from "react-icons/gr";
// import { ImBooks } from "react-icons/im";
import { MdOutlinePayments } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

import LibraryImg from "../assets/website/library.jpg";

const Banner = () => {
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2
          items-center gap-6 "
          >
            {/* image section */}
            <div className="">
              <img
                data-aos="zoom-in"
                className="max-w-[400px] block mx-auto h-[350px] w-full 
                drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover "
                src={LibraryImg}
                alt=""
              />
            </div>
            {/* text section */}
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center
              gap-6 sm:pt-0 "
            >
              <h1
                className="text-3xl sm:text-4xl 
               font-bold "
              >
                Library at your fingertips
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                ex eget leo porttitor tincidunt. Mauris eget pharetra orci, at.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <IoBookSharp
                    className="text-4xl h-12 w-12 shadow-sm p-3 
                  rounded-full bg-blue-100 dark:bg-blue-400 "
                  />
                  <p>Quality Books</p>
                </div>
                <div className="flex items-center gap-4">
                  <GiDeliveryDrone
                    className="text-4xl h-12 w-12 shadow-sm p-3 
                  rounded-full bg-orange-100 dark:bg-orange-400 "
                  />
                  <p>Fast Delivery</p>
                </div>
                <div className="flex items-center gap-4">
                  <MdOutlinePayments
                    className="text-4xl h-12 w-12 shadow-sm p-3 
                  rounded-full bg-green-100 dark:bg-green-400 "
                  />
                  <p>Easy Payment Methods</p>
                </div>
                <div className="flex items-center gap-4">
                  <BiSolidOffer
                    className="text-4xl h-12 w-12 shadow-sm p-3 
                  rounded-full bg-red-100 dark:bg-red-400 "
                  />
                  <p>Get Offers on Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
