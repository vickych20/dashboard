import React from "react";
import { BiChevronDown } from "react-icons/bi";
import img1 from "./Assets/mk.jpg";
import img2 from "./Assets/mm1.png";
import img3 from "./Assets/m0.png";
import img4 from "./Assets/m1.png";
import img5 from "./Assets/m2.png";
import img6 from "./Assets/m7.png";

const Llast = () => {
  return (
    <div className="mx-[4rem] font-sans">
      <h1 className="font-bold text-[26px]">My cart (3)</h1>
      <div className="flex items-start justify-center gap-4">
        <div className="w-[70%]">
          <div className="flex justify-between">
            <div className="flex items-start gap-3 font-sans">
              <img src={img6} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 px-4 mt-2 mr-[3rem] items-center">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <img src={img4} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 px-2 mr-[3rem] items-center px-4 mt-2">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <img src={img2} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 px-2 mr-[3rem] items-center px-4 mt-2">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <div className="border-[1px] border-gray-300 p-4">
            <h1>Have a coupon ?</h1>
            <div>
              <button className="border-[1px] border-gray-300">
                Add coupon
              </button>
              <button className="border-[1px] border-gray-300">Apply</button>
            </div>
          </div>
          <div className="border-[1px] border-gray-300 p-4">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>$1403.97</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>$1403.97</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>$1403.97</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Llast;
