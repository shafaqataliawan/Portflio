import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // ✅ single toggle state

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* ✅ Navigation Links */}
      <ul
        className={`${showMenu ? "block" : "hidden"} 
        mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30
        md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#home">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Home</li>
        </a>
        <a href="#about">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#skill">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li>
        </a>
        <a href="#project">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Project</li>
        </a>
        <a href="#footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>

      {/* ✅ Mobile Menu Toggle Icons */}
      {showMenu ? (
        <i
          className="ri-close-line md:hidden absolute right-10 top-6 text-3xl cursor-pointer mb-5"
          onClick={() => setShowMenu(false)}
        ></i>
      ) : (
        <i
          className="ri-menu-2-line md:hidden absolute right-10 top-6 text-3xl cursor-pointer mb-5"
          onClick={() => setShowMenu(true)}
        ></i>
      )}
    </nav>
  );
}
