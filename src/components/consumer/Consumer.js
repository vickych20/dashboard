import React from 'react'
import "./consumer.css";
import img1 from "../Assets/p1.jpg";
import img2 from "../Assets/p2.jpg";
import img3 from "../Assets/p3.jpg";
import img4 from "../Assets/pc0.png";
import img6 from "../Assets/pc2.jpg";
import img7 from "../Assets/h5.jpg";
import img8 from "../Assets/pc3.jpg";
import img9 from "../Assets/pc5.jpg";

const Consumer = () => {
  return (
    <div className="flex items-center mx-[5rem] py-4 shadow-lg pra">
      <div className="py-4 homee w-[270px] h-[280px]">
        <h1 className="font-bold px-8 py-4">Consumer electric and gadgets</h1>
        <button className="twxt-[#000] font-bold px-4 py-2 ml-8 rounded-lg border-[1px] border-gray-400 bg-[#fff]">
          Source now
        </button>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img9} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div className='w-[110px]'>
            <img src={img1} alt="" className="w-full p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img8} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img2} alt="" className="w-[110px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex items-start justify-center py-9 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img3} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-8 border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Kitchen mixture</p>
            <span>from 1900</span>
          </div>
          <div>
            <img src={img1} alt="" className="w-[110px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img6} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img7} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consumer
