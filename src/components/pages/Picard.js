import React, { Fragment } from "react";
import img1 from "../images/brand-02.png";
import img2 from "../images/brand-01.png";
import img3 from "../images/tab3.jpg";
import img4 from "../images/watch.jpg";

const Card = () => {
  return (
    <Fragment>
      <section className="">
        <div>
          <div className="grid flex-wrap lg:grid-cols-4 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1 max-[426px]:content-center gap-[30px]">
            <div className="flex justify-between items-center flex-col bg-gray-100 shadow-lg  rounded-md w-[150px]">
              <div className="mix-blend-multiply">
                <img src={img2} alt="" className="bg-gray-200" />
              </div>
              <div className="py-1">
                <p>Apple air birds</p>
              </div>
              <div className="py-1">
                <p>$67</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg  rounded-md w-[150px]">
              <div className="mix-blend-multiply">
                <img src={img1} alt="" className="bg-gray-200" />
              </div>
              <div className="py-1">
                <p>Apple air birds</p>
              </div>
              <div className="py-1">
                <p>$67</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg  rounded-md w-[150px]">
              <div className="mix-blend-multiply">
                <img src={img3} alt="" className="bg-gray-200" />
              </div>
              <div className="py-1">
                <p>Apple air birds</p>
              </div>
              <div className="py-1">
                <p>$67</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg  rounded-md w-[150px]">
              <div className="mix-blend-multiply">
                <img src={img4} alt="" className="bg-gray-200" />
              </div>
              <div className="py-1">
                <p>Apple air birds</p>
              </div>
              <div className="py-1">
                <p>$67</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Card;
