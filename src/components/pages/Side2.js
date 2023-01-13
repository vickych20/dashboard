import React from 'react'
import { SlPlane } from 'react-icons/sl';
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';


import { AiOutlineWifi, AiOutlineSearch } from "react-icons/ai";

const Side2 = () => {
  return (
      <div className='w-[73%] max-md:hidden'>
      
      <div className="flex items-center justify-between border-b-2 py-2 px-4">
        <div className="flex gap-2 items-center">
          <SlPlane />
          <p>select All</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center  border border-gray-300 gap-2 p-1">
            <AiOutlineWifi />
            <p>filtres</p>
          </div>
          <div className="flex items-center border border-gray-300 gap-2 p-1">
            <AiOutlineSearch />
            <p>search</p>
          </div>
          <div className="flex items-center border border-gray-300 gap-2 p-1 ">
            <FiEdit3 />
            <p>edit</p>
          </div>
          <div className="flex items-center border border-gray-300 gap-2 p-1">
            <MdDelete />
            <p>delete</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <AiOutlineMenu />
          <MdOutlineDashboardCustomize />
        </div>
      </div>
      </div>
    );
}

export default Side2
