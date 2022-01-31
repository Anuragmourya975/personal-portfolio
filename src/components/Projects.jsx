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
                  <a
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    href="#"
                  >
                    Project Title
                  </a>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite">
                  11/1/19
                </p>
              </header>
              <a href="#">
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 py-10 dark:text-bgwhite">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  corrupti fuga quo est odio saepe, eum omnis maiores alias iste
                  culpa incidunt nemo necessitatibus reprehenderit quia
                  recusandae qui asperiores quibusdam?
                </h2>
              </a>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
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
                  <a
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    href="#"
                  >
                    Project Title
                  </a>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite">
                  11/1/19
                </p>
              </header>
              <a href="#">
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 py-10 dark:text-bgwhite">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  corrupti fuga quo est odio saepe, eum omnis maiores alias iste
                  culpa incidunt nemo necessitatibus reprehenderit quia
                  recusandae qui asperiores quibusdam?
                </h2>
              </a>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
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
                  <a
                    className="no-underline hover:underline text-black dark:text-bgwhite"
                    href="#"
                  >
                    Project Title
                  </a>
                </h1>

                <p className="text-grey-darker text-sm dark:text-bgwhite">
                  11/1/19
                </p>
              </header>
              <a href="#">
                {/* <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                /> */}

                <h2 className="flex text-xl items-center justify-center px-6 py-10 dark:text-bgwhite">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  corrupti fuga quo est odio saepe, eum omnis maiores alias iste
                  culpa incidunt nemo necessitatibus reprehenderit quia
                  recusandae qui asperiores quibusdam?
                </h2>
              </a>

              <footer className="flex items-center justify-between leading-none p-2 rounded-lg md:p-4 border-t-4 dark:border-x-sky-500 dark:hover:border-y-purple-500 border-y-purple-900 border-x-sky-900 transition duration-500 hover:border-x-sky-900 hover:border-y-purple-900">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full h-10 w-10"
                    src={profile}
                  />
                  {/* <p className="ml-2 text-sm">Author Name</p> */}
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <BsGithub className="h-10 w-10 dark:text-bgwhite" />
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <BsLink className="h-10 w-10 dark:text-bgwhite" />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}
        </div>
      </div>
    </>
  );
}

export default Projects;
