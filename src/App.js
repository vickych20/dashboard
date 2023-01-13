import React from "react";
import Header from "./components/Header";
import Base from "./components/Base";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="px-4 shadow-md">
        <Header />
      </div>
      <Base />
    </div>
  );
};

export default App;
