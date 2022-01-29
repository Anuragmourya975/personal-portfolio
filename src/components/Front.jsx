import React from "react";
import Navbar from "./Navbar";
import profile from "../images/profile.jpg";
import AvatarMaker from "../images/AvatarMaker.png";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "./Footer";

function Front() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex items-center  justify-center text-center px-5 sm:px-20">
        <img
          src={AvatarMaker}
          alt="Anurag mourya"
          className="h-32 w-auto rounded-full border-4 border-x-purple-900 border-y-sky-900 transition duration-500 hover:scale-110 hover:border-x-sky-900 hover:border-y-purple-900 "
        />
      </div>
      <div className="block items-center justify-center text-center px-3 sm:px-20 ">
        <h1 className="text-center mt-3 text-4xl sm:text-6xl font-sans font-bold dark:text-white  ">
          Hi! I am a <span className="text-sky-800">Anurag Mourya.</span>
        </h1>{" "}
        <h2
          className="text-center mt-2 sm:mt-3 text-xl sm:text-3xl font-bold font-sans"
          style={{ color: "#444444" }}
        >
          A FullStack Developer
        </h2>
        <p
          className="text-center mt-2 sm:mt-4 text-xl sm:text-xl font-medium font-sans px-3 sm:px-5"
          style={{ color: "#444444" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          cum adipisci? Laborum earum, aut quod animi cumque ipsum aliquam,
          reprehenderit necessitatibus ab ullam dolor itaque numquam saepe
          repellendus optio adipisci.
        </p>
        <button
          className="mt-5 flex flex-row m-auto items-center justify-center sm:mt-6 px-3 py-3 border-2 border-x-purple-900 border-y-sky-900 text-base font-semibold transition duration-500 hover:scale-105 hover:border-x-sky-900 hover:border-4 hover:border-y-purple-900 "
          style={{ color: "#444444" }}
        >
          <AiOutlineCloudDownload className="text-2xl font-medium" />
          &nbsp; Download Resume
        </button>
      </div>
      <br />

      <Footer />
    </>
  );
}

export default Front;
