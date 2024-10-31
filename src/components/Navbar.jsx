import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 flex items-center justify-between bg-gray-800">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#DFFAFF] w-[56px] h-[60px] flex items-center justify-center rounded-md border-2 border">
          <img src="./Union.png" className="w-[25px] h-[30px]" alt="logo" />
        </div>
        <h2 className="font-bold text-[#fff] text-[25px]">Yasrly</h2>
      </div>

      {/* Center Section: Menu Links (hidden on small screens) */}
      <div className="hidden md:flex items-center gap-5">
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

      {/* Right Section: Hamburger Menu (visible on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 p-4 md:hidden">
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
      )}
    </div>
  );
};

export default Navbar;
