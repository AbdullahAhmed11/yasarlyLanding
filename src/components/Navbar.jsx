import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#DFFAFF] w-[56px] h-[60px] flex items-center justify-center rounded-md border-2 border">
          <img src="./Union.png" className="w-[25px] h-[30px]" alt="logo" />
        </div>
        <h2 className="font-bold text-[#fff] text-[25px]">Yasrly</h2>
      </div>
      <div className="flex items-center gap-5">
        <a href="/" className="text-[#000] font-medium text-[20px]">
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
      <div></div>
    </div>
  );
};

export default Navbar;
