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
      <div className="px-4   w-[80px] m-1 ">
        <Side />
      </div>
      <div className=""></div>
      <div className="py-4 w-[72%] max-md:items-center ">
        <Side1 />
        <Side2 />
        <div className="py-4 px-8 max-sm:contents">
          <Card />
        </div>
        <div className="py-4 px-8 max-sm:contents">
          <System />
        </div>
        <div className="py-4 px-8 max-sm:contents">
          <Picard />
        </div>
      </div>
      <div className="shrink-0 grow-0">
        <Graph />
      </div>
    </div>
  );
};

export default Base;
