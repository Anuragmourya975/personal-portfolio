import React from "react";
import { ThemeContext } from "./themeContext";
// import { HiMoon, HiSun } from "react-icons/hi";
// import Sun from "./Sun";
// import Moon from "./Moon";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        // <HiSun
        //   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        //   className=" p-1 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-3xl cursor-pointer"
        //   //   className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        // />
        <div
          className=" text-gray-500  dark:text-gray-400 text-2xl cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          🌞
        </div>
      ) : (
        <div
          className=" text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          🌙
        </div>
        // <HiMoon
        //   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        //   className=" p-1 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-3xl cursor-pointer"
        // />
      )}
    </div>
  );
};

export default Toggle;
