import React from "react";
import AvatarMaker from "../images/AvatarMaker.png";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import github from "../images/github (1).png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter (1).png";
function Footer() {
  return (
    //   <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className=" backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-x-purple-900 border-y-sky-900 shadow-xl mb-5 w-10/12 sm:w-5/12 m-auto flex justify-center items-center rounded-xl">
      <div className="relative flex items-center justify-between h-16 ">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center space-x-8">
            <a href="">
              <img
                className="lg:block h-10 w-auto"
                src={github}
                alt="Anurag mourya"
              />
            </a>
            <a href="">
              <img
                className="lg:block h-10 w-auto"
                src={gmail}
                alt="Anurag mourya"
              />
            </a>
            <a href="">
              <img
                className="lg:block h-10 w-auto"
                src={linkedin}
                alt="Anurag mourya"
              />
            </a>
            <a href="">
              <img
                className="lg:block h-10 w-auto "
                src={twitter}
                alt="Anurag mourya"
              />
            </a>
          </div>

          {/* <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </a>
          </div> */}
        </div>
        {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto "> */}
        {/* <!-- Profile dropdown --> */}
        {/* <div className="ml-3 relative">
            <div>
              <button
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
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </nav>
  );
}

export default Footer;
