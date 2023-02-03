import React from 'react';
import img1 from "../Assets/mk.jpg";
import img2 from "../Assets/mm1.png";
import img3 from "../Assets/m0.png";
import img4 from "../Assets/m1.png";
import img5 from "../Assets/m2.png";
import img6 from "../Assets/m7.png";

const Related = () => {
  return (
    <div className="mx-[3rem]">
      <h1 className="font-bold text-[25px] py-4">Related Product</h1>
      <div className="flex items-center gap-4 justify-evenly">
        <div>
          <img src={img1} alt="" className="w-[300px]" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img5} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img6} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md py-4 px-10 mt-4">
        <h1 className='font-bold text-[26px] text-[#fff]'>Super discount on more then 100 USD</h1>
        <p className='text-[#fff]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          ullam.
        </p>
      </div>
    </div>
  );
}

export default Related
