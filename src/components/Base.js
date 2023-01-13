import React from "react";
import Side from "./pages/Side";
import Side1 from "./pages/Side1";
import Side2 from "./pages/Side2";
import Card from "./pages/Card";
import Picard from "./pages/Picard";
import System from "./pages/System";
import Graph from "./pages/Graph";


const Base = () => {
  return (
    <div className="flex">
      <div className="px-4 shadow py-8 w-[100px] ">
        <Side />
      </div>
      <div className="py-8 w-full">
              <Side1 />
        <Side2 />
        <Card />
        <Picard />
        <System />
        
        <div className="">
          <Graph/>
        </div>
        
      
      </div>
    </div>
  );
};

export default Base;
