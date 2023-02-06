import React from "react";
import "./automobile.css";
import img1 from "../Assets/drt.png";
import { IoMdPeople } from "react-icons/io";

const Automobile = () => {
  return (
    <div className="shadow-lg max-md:flex-col flex justify-around">
      <div className="">
        <ul className="max-md:flex max-md:gap-5 max-md:scroll-mx-0 overflow-x-scroll">
          <li className="my-2">Automobile</li>
          <li className="py-1 hover:bg-gray-300 hover:">Clothes and wear</li>
          <li className="py-1 hover:bg-gray-300 hover:">Home interiors</li>
          <li className="py-1 hover:bg-gray-300 hover:">Computer and tech</li>
          <li className="py-1 hover:bg-gray-300 hover:">Tools,equipments</li>
          <li className="py-1 hover:bg-gray-300 hover:">Sports and outdoor</li>
          <li className="py-1 hover:bg-gray-300 hover:">Animal and pets</li>
          <li className="py-1 hover:bg-gray-300 hover:">Machinery tools</li>
          <li className="py-1 hover:bg-gray-300 hover:">More category</li>
        </ul>
      </div>
      <div className="py-2">
        <img src={img1} alt="" />
      </div>
      <div className="py-2 max-md:flex md:justify-around small max-sm:justify-center max-md:items-center">
        <div className="bg-gray-300 p-8 rounded-lg w-[200px] my-2">
          <span className="flex gap-4">
            <IoMdPeople className="text-[#fff] rounded-3xl text-[15px] bg-red-500 w-[30px] h-[20px]" />
            Hi,users lets get start
          </span>
          {/* <button className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold  px-4 rounded inline-flex items-center">
            <span>Join Now</span>
          </button>
          <button className="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold  px-4 rounded inline-flex items-center">
            <span>Login Now</span>
          </button> */}
        </div>
        <div className="bg-yellow-200 p-5 rounded-lg w-[200px] my-2">
          <p>Free photo showing cart trolley shopping online sign graphic</p>
        </div>
        <div className="bg-blue-200 p-5 rounded-lg w-[200px] my-2">
          <p>Free photo showing cart trolley shopping online sign graphic</p>
        </div>
        {/* <div className="bg-blue-400">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            est.
          </p>
        </div>
        <div className="bg-yellow-400">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            est.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Automobile;
