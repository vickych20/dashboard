import React from "react";
import img1 from "./Assets/mk.jpg";
import img2 from "./Assets/g.jpg";
import img3 from "./Assets/m0.png";
import { MdLocalGroceryStore, MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";

const Service = () => {
  return (
    <div className="flex items-start gap-3 py-8">
      <div>
        <img src={img1} alt="" />
        <div>
          <div className="flex items-center gap-3 py-4">
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
            <img
              src={img1}
              alt=""
              className="w-[90px] border-[1px] border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="flex items-center gap-8 text-[#0adb0e]">
          <MdLocalGroceryStore />
          <p>In stock</p>
        </p>
        <h1 className="font-bold">
          Menns Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h1>
        <div className="flex items-center gap-4">
          <p className="flex items-center text-[#e47200] gap-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>7.5</span>
          </p>
          <p className="flex items-center">
            <VscPreview />

            <p> 32 reviews</p>
          </p>
          <p className="flex items-center">
            <AiOutlineSolution />
            <p>154 sold</p>
          </p>
        </div>
        <div className="bg-[#edd2a4] flex items-center gap-4 my-4">
          <div className="border-r-2 border-gray-500 p-2">
            <p>$127.00</p>
            <p>50-100 pcs</p>
          </div>
          <div className="border-r-2 border-gray-500 p-2">
            <p>$127.00</p>
            <p>50-100 pcs</p>
          </div>
          <div>
            <p>$127.00</p>
            <p>50-100 pcs</p>
          </div>
        </div>
        <div className="leading-9 py-4">
          <div className="flex items-center gap-[5rem]">
            <p>Price:</p>
            <p>Negotiable</p>
          </div>
          <div>
            <div className="flex items-center] gap-[5rem]">
              <div>
                <p>Type:</p>
              </div>
              <div>
                <p>Classic shoes</p>
              </div>
            </div>
            <div className="flex items-center] gap-[4rem]">
              <div>
                <p>Material:</p>
              </div>
              <div>
                <p>Plastic material</p>
              </div>
            </div>
            <div className="flex items-center] gap-[70px]">
              <p>Design:</p>
              <p>Modern nice</p>
            </div>
          </div>
          <div>
            <div className="flex items-center] gap-[20px]">
              <p>Customization:</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex items-center] gap-[50px]">
              <p>Protection:</p>
              <p>Plastic material</p>
            </div>
            <div className="flex items-center] gap-[55px]">
              <p>Warranty:</p>
              <p>2 years full warranty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-gray-300 rounded-md p-2">
        <div className="flex items-center pb-2 gap-8 shadow-md py-4">
          <div className="border-[1px] border-gray-300 bg-[#a6e0db] p-1 px-4">
            R
          </div>
          <div className="font-bold text-[16px]">
            Supplier Guanjol Trading LLC
          </div>
        </div>
        <div className="py-8">
          <div className="flex items-center gap-[40px] py-[2px] px-4">
            <img src={img2} alt="" className="w-[30px]" />
            <p>Germany,Berlin</p>
          </div>
          <div className="flex items-center gap-[60px] px-4">
            <MdOutlineVerifiedUser />
            <p>verified Seller</p>
          </div>
          <div className="flex items-center gap-[60px] px-4">
            <TbWorld />
            <p>WorldWide Shipping</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <button className="font-bold px-8 py-1 rounded-lg border-[1px] border-gray-400 text-[#fff] outline-none bg-[#0d99ff] ml-4 w-[260px]">
            Send inquiry
          </button>
          <button className="font-bold px-8 py-1 rounded-lg border-[1px] border-gray-400 text-[#000] outline-none bg-[#ffffff] ml-4 mb-4 w-[260px]">
            Sellers profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
