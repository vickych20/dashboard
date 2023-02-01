import React from "react";
import { AiOutlineRight, AiFillStar } from "react-icons/ai";
import "./about.css";

const About = () => {
  return (
    <div className="mx-[5rem] leading-8">
      <div className="flex items-start justify-start gap-4 text-[#a3a2a2] py-4">
        <div className="flex items-center gap-2">
          <p>Home</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <p>Clothing</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <p>Men's wear</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div>
          <p>Summer Clothing</p>
        </div>
      </div>
      <div>
        <div className="cate">
          <div className="flex justify-between items-center">
            <h1>category</h1>

            <AiOutlineRight />
          </div>
          <p>Mobile accessory</p>
          <p>Electronics</p>
          <p>smartphones</p>
          <p>modern tech</p>
          <p>See all</p>
          <div>
            <div className="flex justify-between items-center">
              <h1>Brands</h1>

              <AiOutlineRight />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Samsung</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>lenovo</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>pocco</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Mobile</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Apple</p>
              </div>
            </div>
            <p>See all</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1>Features</h1>

              <AiOutlineRight />
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Metallic</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>plastic cover</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>8GB Ram</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Super power</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p>Apple</p>
              </div>
            </div>
            <p>See all</p>
          </div>
          <div>
            <div>
              <div className="flex justify-between items-center">
                <p>price range</p>
                <AiOutlineRight />
              </div>
              <input type="range" name="" id="" />
              <div className="flex items-center justify-evenly">
                <div>
                  <p>Min</p>
                  <button className="border-[1px] border-gray-300 px-[30px]">
                    0
                  </button>
                </div>
                <div>
                  <p>Max</p>
                  <button className="border-[1px] border-gray-300 px-[10px]">
                    999999
                  </button>
                </div>
              </div>
              <button className="border-[1px] border-gray-300 px-[10px]">
                Apply now
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1>Features</h1>

                <AiOutlineRight />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p>Metallic</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p>plastic cover</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p>8GB Ram</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p>Super power</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p>Apple</p>
                </div>
              </div>
              <p>See all</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1>Ratings</h1>

                <AiOutlineRight />
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <p>See all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
