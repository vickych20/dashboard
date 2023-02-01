import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import "./app.css";
import Home from "./Home";
import About from "./components/About";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Subscribe/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
