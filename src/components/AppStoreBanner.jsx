import React from "react";

import Board from "../assets/website/board.png";
import AppStore from "../assets/website/app_store.png";
import PlayStore from "../assets/website/play_store.png";

const bannerImg = {
  backgroundImage: `url(${Board})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10"
      style={bannerImg}
    >
      <div className="container">
        <div className="space-y-6 max-w-xl mx-auto ">
          <h1
            data-aos="slide-up"
            className="text-2xl text-center sm:text-4xl font-semibold "
          >
            Read books at your fingertips
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <a href="#" className="">
              <img
                src={PlayStore}
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
              />
            </a>
            <a href="#" className="">
              <img
                src={AppStore}
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
