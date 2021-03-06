import React, { useState } from "react";

import Navbar from "./Navbar";
import profile from "../images/profile.jpg";
import AvatarMaker from "../images/AvatarMaker.png";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "./Footer";
import { Image, useImage } from "react-img-placeholder";
import "../App.css";
import MainFooter from "./MainFooter";
import User1 from "../images/user (1).png";
import { Link } from "react-router-dom";
import resume2 from "../assets/resume2.pdf";

function Front() {
  // const downloadFile = () => {
  //   window.location.href = "https://google.com";
  // };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="justify-center items-center flex flex-col ">
        <div className="flex items-center  justify-center text-center px-5 sm:px-20">
          <Image
            src={AvatarMaker}
            alt="Anurag mourya"
            className=" block h-32 shadow-xl w-auto rounded-full border-4 dark:border-x-purple-500 dark:hover:border-y-purple-500 dark:hover:border-x-sky-500 dark:border-y-sky-500 border-x-purple-900 border-y-sky-900 transition duration-500 hover:scale-110 hover:border-x-sky-900 hover:border-y-purple-900 "
            height="128px"
            width="128px"
            placeholderSrc={User1}
          />
          {/* <img /> */}
        </div>
        <div className="block items-center justify-center text-center px-3 sm:px-20 ">
          <h1 className="text-center mt-3 text-4xl sm:text-6xl font-sans font-bold dark:text-white  ">
            Hi! I am a{" "}
            <span className="text-sky-800 dark:text-sky-400">
              Anurag Mourya.
            </span>
          </h1>{" "}
          <h2 className="text-center mt-2 sm:mt-3 text-xl sm:text-3xl font-bold font-sans dark:text-bgwhite text-lightdark">
            A FullStack Developer
          </h2>
          <p className="text-center mt-2 sm:mt-4 text-xl sm:text-xl font-medium font-sans px-3 sm:px-5 dark:text-bgwhite text-lightdark">
            I am a 3rd-year student pursuing a bachelor's in computer science
            from Mahakal Institute of technology & management Ujjain Madhya
            Pradesh. I am a passionate learner who's always willing to learn and
            work across technologies and domains. I'm currently into Web
            Development and working on my Data Structures and Algorithm skills.
            I'm always ready to improve my programming skills and adopt new
            technologies.
          </p>
          <a href={resume2} target="_blank">
            <button className="mt-5 flex flex-row m-auto items-center justify-center sm:mt-6 px-3 py-3 border-2 border-x-purple-900 dark:border-x-purple-500 border-y-sky-900 dark:border-y-sky-500 text-base font-semibold transition duration-500 hover:scale-105 hover:border-x-sky-900 dark:hover:border-x-sky-500  dark:hover:border-y-purple-500 hover:border-y-purple-900 dark:text-bgwhite text-lightdark ">
              <AiOutlineCloudDownload className="text-2xl font-medium" />
              &nbsp; Download Resume
            </button>
          </a>
        </div>
        <br />

        <Footer />
      </div>
    </>
  );
}

export default Front;
