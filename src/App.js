import React from "react";
import "./App.css";
import Front from "./components/Front";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="bg-bgwhite dark:bg-background h-screen overflow-auto ">
              <Front />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/projects"
          element={
            <div className="bg-bgwhite dark:bg-background h-screen overflow-auto ">
              <Projects />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/skills"
          element={
            <div className="bg-bgwhite dark:bg-background h-screen overflow-auto ">
              <Skills />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/contacts"
          element={
            <div className="bg-bgwhite dark:bg-background h-screen overflow-auto ">
              <Contacts />
            </div>
          }
        ></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
