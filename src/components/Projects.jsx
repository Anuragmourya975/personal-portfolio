import React from "react";
import Navbar from "./Navbar";
import profile from "../images/profile.jpg";
import { BsGithub, BsLink } from "react-icons/bs";
function Projects() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-2xl dark:border-2 dark:border-x-sky-400 dark:border-y-purple-400  ">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4 rounded-lg border-b-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <h1 className="text-lg">
                  <button
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    style={{ cursor: "default" }}
                  >
                    Corona Tracking App
                  </button>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite"></p>
              </header>
              <a>
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2
                  className="flex text-xl items-center justify-center px-6 pt-10 pb-1 dark:text-bgwhite"
                  style={{ cursor: "default" }}
                >
                  It is a web app that is used to check total positive cases of
                  corona and statistics, deaths, recovered people, and other
                  relevant data on a global level.
                </h2>
                <div class="m-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1 px-2">
                      <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        React
                      </button>
                    </li>
                    <li class="m-1 px-2">
                      <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                        API Calls Using Axios
                      </button>
                    </li>
                  </ul>
                </div>
              </a>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <img
                  alt="Placeholder"
                  className="block rounded-full h-10 w-10"
                  src={profile}
                />
                {/* <p className="ml-2 text-sm">Author Name</p> */}{" "}
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://github.com/Anuragmourya975/corono-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://tracking-corona975.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink className="h-10 w-10 dark:text-bgwhite" />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-2xl dark:border-2 dark:border-x-sky-400 dark:border-y-purple-400 ">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4 rounded-lg border-b-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <h1 className="text-lg">
                  <button
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    style={{ cursor: "default" }}
                  >
                    Chat App
                  </button>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite"></p>
              </header>
              <a href="#" style={{ cursor: "default" }}>
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 pt-10 pb-1 dark:text-bgwhite">
                  This application is based on a chat engine(Chat API provides
                  many features to implement our own chat app) where people can
                  interact with each other.
                </h2>
              </a>
              <div class="m-3">
                <ul class="flex flex-wrap text-xs font-medium -m-1">
                  <li class="m-1 px-2">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                      React
                    </button>
                  </li>
                  <li class="m-1 px-2">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                      API Calls Using Axios
                    </button>
                  </li>
                  <li class="m-1 px-2">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                      Chat Engine
                    </button>
                  </li>
                </ul>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <button
                  style={{ cursor: "default" }}
                  className="flex items-center no-underline hover:underline text-black"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </button>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://github.com/Anuragmourya975/chat-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://chhatapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLink className="h-10 w-10 dark:text-bgwhite" />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}
          {/* <!-- Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-2xl dark:border-2 dark:border-x-sky-400 dark:border-y-purple-400 ">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4 rounded-lg border-b-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <h1 className="text-lg">
                  <button
                    style={{ cursor: "default" }}
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    // href="#"
                  >
                    Portfolio Website
                  </button>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite"></p>
              </header>
              <a href="#" style={{ cursor: "default" }}>
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 pt-10 pb-1 dark:text-bgwhite">
                  I have designed this website as a place for me to record all
                  my projects and skills acquired so far. These are just a few
                  of the things that I have worked on recently.
                </h2>
              </a>
              <div class="m-3">
                <ul class="flex flex-wrap text-xs font-medium -m-1">
                  <li class="m-1 px-2">
                    <button
                      style={{ cursor: "default" }}
                      class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                    >
                      React
                    </button>
                  </li>
                  <li class="m-1 px-2">
                    <button
                      style={{ cursor: "default" }}
                      class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                    >
                      Tailwind CSS
                    </button>
                  </li>
                </ul>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <button
                  style={{ cursor: "default" }}
                  className="flex items-center no-underline hover:underline text-black"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </button>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://github.com/Anuragmourya975/personal-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="/"
                >
                  <BsLink className="h-10 w-10 dark:text-bgwhite" />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-2xl dark:border-2 dark:border-x-sky-400 dark:border-y-purple-400 ">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4 rounded-lg border-b-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <h1 className="text-lg">
                  <button
                    style={{ cursor: "default" }}
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    // href="#"
                  >
                    Youtube Forum <strong>(Currently Working)</strong>
                  </button>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite"></p>
              </header>
              <a href="#" style={{ cursor: "default" }}>
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 pt-10 pb-1 dark:text-bgwhite">
                  YouTube forum is a YouTube channels review platform where you
                  can search channels based on user ratings. it is made with a
                  MERN stack and its entire architecture is based on CRUD
                  operations, where users can browse, add channels, and rate
                  (like/dislike) the added ones
                </h2>
              </a>
              <div class="m-3">
                <ul class="flex flex-wrap text-xs font-medium -m-1">
                  <li class="m-1 px-2">
                    <button
                      style={{ cursor: "default" }}
                      class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                    >
                      MERN Stack
                    </button>
                  </li>
                </ul>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <button
                  style={{ cursor: "default" }}
                  className="flex items-center no-underline hover:underline text-black"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </button>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://github.com/Anuragmourya975/youtube1.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="https://youtubeforum.netlify.app"
                >
                  <BsLink className="h-10 w-10 dark:text-bgwhite" />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
