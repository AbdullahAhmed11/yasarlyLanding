"use client";
import React from "react";
import Navbar from "./Navbar";
import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import DesctopSection from "./DesctopSection";
import CoursesSection from "./CoursesSection";
import ChatSection from "./ChatSection";
import TouchSection from "./TouchSection";
import Footer from "./Footer";
import Trending from "./Trending";
const Home = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/yassarly-webSetup.exe";
    link.download = "yassrly.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-full h-[800px]  bg-[#09C1E0] flex flex-col gap-5">
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-5">
        <div>
          <h2 className="text-[#fff] font-bold text-[50px] text-center">
            All What you Need in <br /> One Place
          </h2>
        </div>
        <div>
          <p className="text-[#10738E] text-center font-medium text-[20px]">
            Learn from the best in the field. Our instructors are industry{" "}
            <br /> leaders and subject matter experts committed to your success.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center justify-center gap-3 w-[270px] h-[70px] bg-[#23B54A] rounded-md ">
            <BsAndroid2 className="text-[#fff]" />{" "}
            <span className="text-[#fff]">Download for Andriod</span>
          </button>
          <button className="flex items-center justify-center gap-3 w-[270px] h-[70px] bg-[#141414] rounded-md ">
            <BsApple className="text-[#fff]" />{" "}
            <span className="text-[#fff]">Download for iOS</span>
          </button>
          <button
            onClick={downloadFile}
            className="flex items-center justify-center gap-3 w-[270px] h-[70px] bg-[#00A3FF] rounded-md "
          >
            <FaWindows className="text-[#fff]" />{" "}
            <span className="text-[#fff]">Download for Windows</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-[25px] ">
          <div className="bg-[#000] rounded-[15px]">
            <img src="./Pixel.png" alt="pixel" />
          </div>
          <div className="bg-[#000] rounded-[15px]">
            <img src="./Pixell.png" alt="pixel" />
          </div>
          <div className="bg-[#000] rounded-[15px]">
            <img src="./Pixelll.png" alt="pixel" />
          </div>
        </div>
      </div>
      <div className="mt-[150px]">
        <DesctopSection />
      </div>
      <div className="mt-[150px]">
        <CoursesSection />
      </div>
      <div className="mt-[150px]">
        <ChatSection />
      </div>
      <div className="mt-[150px]">
        <Trending />
      </div>
      <div className="mt-[150px]">
        <TouchSection />
      </div>
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
