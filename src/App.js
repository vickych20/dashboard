import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import "./app.css";
import Home from "./Home";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        


        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
       
        </Routes>
      </Router>
    </>
  );
};

export default App;
