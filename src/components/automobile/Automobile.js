import React from 'react';
import './automobile.css';
import img1 from '../Assets/des0.webp';
import { IoMdPeople } from 'react-icons/io';

const Automobile = () => {
  return (
    <div className="flex items-center mx-[5rem] py-4 shadow-lg">
      <div className="item">
        <ul className="flex flex-col gap-[20px] px-4">
          <li className="active">Automobile</li>
          <li className="active">Clothes and wear</li>
          <li className="active">Home interiors</li>
          <li className="active">Computer and tech</li>
          <li className="active">Tools,equipments</li>
          <li className="active">Sports and outdoor</li>
          <li className="active">Animal and pets</li>
          <li className="active">Machinery tools</li>
          <li className="active">More category</li>
        </ul>
      </div>
      <div className="w-[600px] m-auto">
        <img src={img1} alt="" />
      </div>
      <div className="side flex flex-col items-center gap-4">
        <div className="bg-gray-300 p-8 rounded-lg">
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
        <div className="bg-yellow-200 p-5 rounded-lg">
          <p>Free photo showing cart trolley shopping online sign graphic</p>
        </div>
        <div className="bg-blue-200 p-5 rounded-lg">
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
}

export default Automobile
