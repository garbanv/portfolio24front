"use client";
import React, { useState } from "react";
import Link from "next/link"; 
import { useInView } from "react-intersection-observer";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            inView ? "slide-bottom" : ""
          }`} ref={ref}>
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
       
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
           
          </span>
        </Link>
        <button
          onClick={toggleMenu} // Use the toggle function
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:shadow-md"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen} // Set aria-expanded dynamically
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`} // Conditionally show/hide
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-2  sticky mt-4  rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
              </li>
              <li>
              <Link
                href="/#work"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Work
              </Link>
              </li>
              <li className="block py-2 px-3 rounded md:bg-transparent md:p-0">Based on <br /> <span className="text-xs  ">Barcelona, Spain</span></li>
              <li className="block py-2 px-3 rounded md:bg-transparent md:p-0">Say hello, <br /> <a href="mailto:garban.valdeon@gmail.com"className="text-xs bg-black rounded  px-2 py-1 text-white cursor-pointer" >garban.valdeon@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
