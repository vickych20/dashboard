import React, { Fragment } from "react";
import img1 from "../images/acc.jpg";
import img2 from "../images/blog-1.jpg";
import img3 from "../images/tab3.jpg";
import img4 from "../images/watch.jpg";

const Card = () => {
  return (
    <Fragment>
      <section className="">
        <div>
        <div className="w-[72%] grid flex-wrap lg:grid-cols-5 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1 max-[426px]:content-center">
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
              <img src={img4} alt="" />
            </div>
            <div className="py-4">
              <p>Apple air birds</p>
            </div>
            <div className="py-2">
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
