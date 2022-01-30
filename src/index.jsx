import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@themesberg/flowbite";
import App from "./App";
import Background from "./components/background";
// import { ThemeProvider } from "./components/themeContext";
// import Toggle from "./components/themeToggle";
// import Background from "./components/background";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
