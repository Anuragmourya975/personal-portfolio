import React from "react";
import AvatarMaker from "../images/AvatarMaker.png";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import github from "../images/github (1).png";
import github3 from "../images/github (3).png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter (1).png";
import { Image, useImage } from "react-img-placeholder";

function Footer() {
  return (
    //   <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className=" backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-x-purple-900 border-y-sky-900 shadow-xl mb-5 w-10/12 sm:w-5/12 m-auto flex justify-center items-center rounded-xl dark:border-x-purple-500 dark:border-y-sky-500 dark:hover:border-x-sky-500  dark:hover:border-y-purple-500">
      <div className="relative flex items-center justify-between h-16 ">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center space-x-8">
            <a href="https://github.com/Anuragmourya975" target="_blank">
              <Image
                className="lg:block h-10 w-auto"
                src={github3}
                alt="Anurag mourya"
                height="40px"
                width="40px"
              />
              {/* <img /> */}
            </a>
            <a href="mailto:anuragmourya975@gmail.com" target="_blank">
              <Image
                className="lg:block h-10 w-auto"
                src={gmail}
                alt="Anurag mourya"
                height="40px"
                width="40px"
              />
            </a>
            <a href="https://www.linkedin.com/in/anurag-mourya-456b391a5/">
              <Image
                className="lg:block h-10 w-auto"
                src={linkedin}
                alt="Anurag mourya"
                height="40px"
                width="40px"
              />
            </a>
            <a href="https://twitter.com/AnuragM15401198">
              <Image
                className="lg:block h-10 w-auto"
                src={twitter}
                alt="Anurag mourya"
                height="40px"
                width="40px"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
