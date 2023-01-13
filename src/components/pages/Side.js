import React from "react";
import { GiIronCross } from "react-icons/gi";
import { AiFillTrophy } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { AiOutlineDropbox, AiOutlineFall } from "react-icons/ai";

const Side = () => {
  return (
    <div className="flex flex-col justify-between h-[80vh] max-md:hidden">
      <div className="flex flex-col gap-y-3">
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <GiIronCross className="text-[#fff] rounded-3xl" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiFillTrophy className="text-[#fff]" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <MdOutlineMessage className="text-[#fff]" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiOutlineFall className="text-[#fff]  rounded-3xl" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiOutlineDropbox className="text-[#fff]" />
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiOutlineFall className="text-[#fff] bg-gray-300 rounded-3xl" />
        </div>
        <div className="bg-gray-300 h-[30px] w-[30px] items-center flex justify-center rounded-3xl">
          <AiOutlineDropbox className="text-[#fff] bg-gray-300 rounded-3xl" />
        </div>
      </div>

      {/*          
        <TiMessages /> */}
    </div>
  );
};

export default Side;
