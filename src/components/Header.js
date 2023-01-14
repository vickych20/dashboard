import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 max-md:justify-evenly max-md:py-2">
      <div className="flex items-center gap-10 justify-center">
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiOutlineMenu />
        </div>
        <p className="font-bold">constructor</p>
      </div>
      <div>
        <ul className="max-xl: flex items-center justify-center gap-4 text-[13px] max-md:hidden">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">pyment</a>
          </li>
          <li>
            <a href="#">python</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">product</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center bg-gray-200 py-2 rounded-2xl text-center px-4 gap-5 max-sm:hidden max-lg:hidden">
        <div>
          <AiOutlineSearch className="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="seacrh transation..."
            className="outline-none border-none bg-transparent flex items-center justify-center gap-4"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-white-800">
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <CgProfile className="text-[#fff]" />
        </div>
        <div className="items-center flex justify-center rounded-3xl max-md:hidden">
          <p>clayton santos</p>
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl max-md:hidden">
          <IoIosNotificationsOutline className="text-[#fff]" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl max-md:hidden">
          <RxCross2 className="text-[#fff]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
