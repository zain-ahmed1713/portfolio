import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/zain-ahmed-1ba904287/", "_blank");
  };

  const redirectToGithub = () => {
    window.open("https://www.github.com/zainahmed1713", "_blank");
  };

  return (
    <nav className="relative font-roboto bg-[#353535] p-4 text-[#A3BE8C] border-b-2 border-[#A3BE8C]">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl italic tracking-wide text-center md:text-left md:m-2 md:text-3xl">
          Zain Ahmed
        </h3>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex md:space-x-4">
          <button
            onClick={redirectToLinkedIn}
            className="bg-[#A3BE8C] text-lg text-black p-2 w-24 rounded-3xl hover:opacity-80"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
          <button
            onClick={redirectToGithub}
            className="bg-[#A3BE8C] text-lg text-black p-2 w-24 rounded-3xl hover:opacity-80"
          >
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-[#353535] border-t-2 border-[#A3BE8C] shadow-lg transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center p-4">
          <button
            onClick={redirectToLinkedIn}
            className="bg-[#A3BE8C] text-black p-2 w-24 rounded-3xl mt-2"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
          <button
            onClick={redirectToGithub}
            className="bg-[#A3BE8C] text-black p-2 w-24 rounded-3xl mt-2"
          >
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
