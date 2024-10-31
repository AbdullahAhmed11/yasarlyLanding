import React from "react";

import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full pb-10 bg-[#093343] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 mt-[100px]">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div className="w-[50px] h-[50px] bg-[#DFFAFF] flex items-center justify-center">
              <img src="./Union.png" className="w-[25px] h-[30px]" alt="logo" />
            </div>
            <h2 className="font-bold text-[#fff] text-[25px]">Yasrly</h2>
          </div>
          <p className="text-[#ECFEFF] font-medium text-[20px]">
            Learn from the best in the field. Our instructors are industry
            <br /> leaders and subject matter experts committed to your success.
          </p>
          <div className="flex items-center gap-5">
            <a href="/" className="text-[#fff] font-medium text-[20px]">
              Home
            </a>
            <a href="/" className="text-[#fff] font-medium text-[20px]">
              Our Feature
            </a>
            <a href="/" className="text-[#fff] font-medium text-[20px]">
              Trending Courses
            </a>
            <a href="/" className="text-[#fff] font-medium text-[20px]">
              Contact Us
            </a>
          </div>
        </div>
        <div className=":w-1/2 flex flex-col gap-5">
          <h2 className="font-bold text-[#fff] text-[15px] md:text-[25px]">Get the App</h2>
          <div className="flex items-center gap-5">
            <button className="flex items-center justify-center gap-1 w-[200px] h-[50px] bg-[#23B54A] rounded-md ">
              <BsAndroid2 className="text-[#fff]" />{" "}
              <span className="text-[#fff] text-[15px]">Download for Andriod</span>
            </button>
            <button className="flex items-center justify-center gap-1 w-[200px] h-[50px] bg-[#141414] rounded-md ">
              <BsApple className="text-[#fff]" />{" "}
              <span className="text-[#fff]">Download for iOS</span>
            </button>
            <button className="flex items-center justify-center gap-1 w-[200px] h-[50px] bg-[#00A3FF] rounded-md ">
              <FaWindows className="text-[#fff]" />{" "}
              <span className="text-[#fff]">Download for Windows</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        <p className="text-[#D1D5DB]">
          © 2024 Landify UI Kit. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
