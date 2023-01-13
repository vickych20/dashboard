import React, { Fragment } from "react";
import img1 from "../images/tab2.jpg";
import img2 from "../images/tab1.jpg";
import img3 from "../images/tab3.jpg";
import img01 from "../images/empty-cart.jpg";

const System = () => {
  return (
    <Fragment>
      <section className="row">
        <div className="grid flex-wrap lg:grid-cols-5 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1 max-[426px]:content-center w-[72%]">
          <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg p-8 rounded-md w-[200px]">
            <div className="mix-blend-multiply">
              <img src={img1} alt="" className="bg-gray-200" />
            </div>
            <div className="py-4">
              <p>Apple air birds</p>
            </div>
            <div className="py-2">
              <p>$67</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg p-8 rounded-md w-[200px]">
            <div className="mix-blend-multiply">
              <img src={img2} alt="" className="mix-blend-multiply" />
            </div>
            <div className="py-4">
              <p>Apple air birds</p>
            </div>
            <div className="py-2">
              <p>$67</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg p-8 rounded-md w-[200px]">
            <div className="mix-blend-multiplyt">
              <img src={img3} alt="" className="mix-blend-multiply" />
            </div>
            <div className="py-4">
              <p>Apple air birds</p>
            </div>
            <div className="py-2">
              <p>$67</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg p-8 rounded-md w-[200px]">
            <div className="mix-blend-multiply">
              <img src={img01} alt="" />
            </div>
            <div className="py-4">
              <p>Apple air birds</p>
            </div>
            <div className="py-2">
              <p>$67</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default System;
