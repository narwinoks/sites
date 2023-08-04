import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiAlignLeft } from "react-icons/fi";
const Header = ({ toggleDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="sticky top-0 z-10 shadow-sm">
      <nav className="mx-auto flex w-full max-w-5xl justify-between bg-brand-light p-4 transition-[background-color] duration-300 dark:bg-brand-dark">
        <button
          className="rounded-md py-3 px-4 transition-[background-color] duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 md:py-2 visible relative md:hidden"
          onClick={toggleNavbar}
        >
          <FiAlignLeft></FiAlignLeft>
        </button>
        <div className="hidden space-x-2 md:flex">
          <Link
            to={"/"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to={"/projects"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            to={"/blogs"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Blogs
          </Link>
          <Link
            to={"/blogs"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact
          </Link>
          <Link
            to={"/others"}
            className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Others
          </Link>
        </div>
        <button onClick={toggleDarkMode}>
          <MdOutlineDarkMode></MdOutlineDarkMode>
        </button>
      </nav>
      {/* navbar small */}
      <div
        className={`${
          showNavbar
            ? "hidden"
            : "absolute bg-white z-10 h-screen w-full border-b-gray-200"
        }`}
      >
        <div className="py-5 px-6">
          <ul className="w-full space-y-4">
            <li className="py-2 border-b border-gray-200">Home</li>
            <li className="py-2 border-b border-gray-200">About</li>
            <li className="py-2 border-b border-gray-200">Projects</li>
            <li className="py-2 border-b border-gray-200">Blogs</li>
            <li className="py-2 border-b border-gray-200">Contact</li>
            <li className="py-2 border-b border-gray-200">Others</li>
          </ul>
        </div>
      </div>
      {/* end small navbar */}
    </header>
  );
};

export default Header;
