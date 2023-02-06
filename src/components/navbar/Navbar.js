import React from 'react'
import './navbar.css';
import { TbBrandGooglePlay } from 'react-icons/tb'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { BiMessageDetail, BiChevronDown } from "react-icons/bi";
import { GiEternalLove } from "react-icons/gi";
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-evenly items-center py-4 md:py-1">
        <div className="flex items-center gap-2">
          <TbBrandGooglePlay className="bg-[#0d99ff] text-[20px] text-[#fff] rounded-full h-[50px] w-[50px]" />
          <h2 className="text-[#469fdf] text-[30px]">Brand</h2>
        </div>
        <div className="max-md:hidden flex items-center gap-2 border-[1px] border-[#0d99ff] rounded-md">
          <input
            type="search"
            placeholder="Search"
            className="w-[300px] outline-none px-2"
          />
          <AiOutlineSearch />
          <div className="w-[1px] h-[30px] bg-[#0d99ff]"></div>
          <select name="cars" id="cars" className="outline-none max-md:hidden">
            <option value="all category">All category</option>
            <option value="saab">solution</option>
            <option value="opel">products</option>
            <option value="audi">cloths</option>
          </select>
          <div className="bg-[#0d99ff] text-[#fff] py-1 overflow-hidden px-4">
            <p>Search</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[17px] text-[#8e9bb1]">
          <p>
            <IoMdPeople className="text-[23px] text-[#b8c2d3]" /> profile
          </p>
          <p className="max-md:hidden">
            <BiMessageDetail className="text-[23px] text-[#aeb9c7]" />
            Message
          </p>
          <p className="max-md:hidden w-full">
            <GiEternalLove className="text-[23px] text-[#a0aec1]" />
            orders
          </p>
          <p>
            <AiOutlineShoppingCart className="text-[23px] text-[#95a3b8]" />
            my cart
          </p>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-400 border-b-[1px]">
        <div className="flex justify-around items-center py-4 overflow-x-scroll">
          <div className="flex items-center gap-4">
            <FiMenu />
            <p>All category</p>
            <p>Hot offers</p>
            <p>gift boxes</p>
            <p>projects</p>
            <p>menu items</p>
            <p>help</p>
            <BiChevronDown />
          </div>
          <div className="flex items-center gap-4">
            <select name="cars" id="cars">
              <option value="volvo">English,USD</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">Ship to</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
