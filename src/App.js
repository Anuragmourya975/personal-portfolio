import React from "react";
import "./App.css";
import Background from "./components/background";
import Front from "./components/Front";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" h-screen bg-bgwhite dark:bg-background">
      <Front />
    </div>
  );
}

export default App;
