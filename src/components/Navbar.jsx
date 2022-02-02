import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import AvatarMaker from "../images/AvatarMaker.png";
import { ThemeProvider } from "./themeContext";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { Image, useImage } from "react-img-placeholder";
// import Background from "./background";
import Toggle from "./themeToggle";
import User1 from "../images/user (1).png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //   <!-- This example requires Tailwind CSS v2.0+ -->

    <nav className=" shadow-2xl backdrop-blur-sm bg-transparent dark:bg-transparent  mt-0 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 lg:ml-60 lg:mr-60 md:ml-20 md:mr-20">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}

              {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Image
                  className="lg:block h-10 w-auto  rounded-full border-2  border-x-purple-700 border-y-sky-700"
                  src={AvatarMaker}
                  alt="Anurag mourya"
                  height="40px"
                  width="40px"
                  placeholderSrc={User1}
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/projects" className="flex">
                  {" "}
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Projects
                  </a>
                </Link>

                <Link to="/skills" className="flex">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Skills
                  </a>
                </Link>
                {/* <Link to="/contacts" className="flex">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-300 hover:text-gray-700 px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Contacts
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://t.me/Anurag_mourya"
              target="_blank"
              id="dropdownSmallButton"
              data-dropdown-toggle="dropdownSmall"
              className="  p-1 rounded-full text-gray-600 dark:text-gray-300 dark:hover:bg-gray-800  hover:bg-gray-300 hover:text-gray-700 focus:outline-none   focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              {/* <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg> */}
              <FaTelegramPlane className="h-6 w-6" />
            </a>

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                {/* <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button> */}
                <ThemeProvider>
                  <main>
                    <div>
                      <Toggle />
                    </div>
                    {/* <App /> */}
                  </main>
                </ThemeProvider>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden text-center" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              {/* <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a> */}
              <Link to="/projects">
                <a
                  href="#"
                  className="text-gray-600 dark:text-white dark:hover:bg-hovercolor  hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base semibold "
                >
                  Projects
                </a>
              </Link>
              <Link to="/skills">
                <a
                  href="#"
                  className="text-gray-600 dark:text-white dark:hover:bg-hovercolor  hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base semibold "
                >
                  Skills
                </a>
              </Link>
              {/* <a
                href="#"
                className="text-gray-600 dark:text-white dark:hover:bg-hovercolor  hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base semibold "
              >
                Contacts
              </a> */}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
