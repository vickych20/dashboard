import React from "react";
import Navbar from "./components/navbar/Navbar";
import Automobile from "./components/automobile/Automobile";
import Deals from "./components/deals/Deals";
import Homeoutdoor from "./components/homeoutdoor/Homeoutdoor";
import Consumer from "./components/consumer/Consumer";
import Easy from "./components/Easy/Easy";
import Recommended from "./components/recommmended/Recommended";
import Recomm from "./components/recommmended/Recomm";
import Our from "./components/our/Our";
import Suppliear from "./components/suppliear/Suppliear";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden select-none">
      
      <Automobile />
      <Deals />
      <Homeoutdoor />
      <Consumer />
      <Easy />
      <Recommended />
      <Recomm />
      <Our />
      <Suppliear />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
