import React from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

const Side1 = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between  border-b-2 py-2 ">
        <div className="flex gap-4 px-4 max-sm:px-4">
          <div className="h-[30px] w-[30px] rounded-3xl bg-gray-200 text-[#fff] items-center flex justify-center">
            <BsFillHandbagFill />
          </div>
        </div>
        <div className="flex gap-6 text-[10px]">
          <p>Products</p>
          <p>Active</p>
          <p>draft</p>
          <p>Assembly</p>
        </div>
        <div className="bg-gray-200 text-center py-2 rounded-2xl flex items-center gap-4 px-1 max-md:hidden max-xl:w-[100px] max-xl:text-[12px]">
          <IoMdAdd className="" />
          <input
            type="button"
            value="Add products"
            placeholder=""
            className="outline-none border-none bg-transparent w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Side1;
