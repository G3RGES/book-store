import React from "react";

import { FaAngleDoubleDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping, FaChevronDown } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

import Logo from "../assets/website/logo.png";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      className="shadow-lg bg-white dark:bg-gray-900 dark:text-white 
    duration-200 "
    >
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 font-semibold ">
            <div>
              <DarkMode />
            </div>
            <ul className=" items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4
                  px-4 hover:text-primary duration-200 dark:hover:text-secondary"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <a href="/#" className="flex items-center h-[72px] gap-[2px]  ">
                  Quick Links
                  <span>
                    <FaChevronDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                {/* dropdown links */}
                <div
                  className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white
                p-2 shadow-md w-[150px]"
                >
                  <ul>
                    {DropdownLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.link}
                          className="inline-block
                        w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              className="bg-gradient-to-r
             from-primary to-secondary
              text-white px-4 py-1 rounded-full flex items-center gap-3
              hover:scale-105 duration-300"
              onClick={handleOrderPopup}
            >
              Order
              <CiShoppingCart
                className="text-2xl 
              drop-shadow-sm cursor-pointer
               text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
