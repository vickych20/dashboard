import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";
import img1 from '../Assets/mo5.webp';
import img2 from '../Assets/mo0.jpg';
import img3 from '../Assets/mo2.jpg';
import img4 from '../Assets/mo4.webp';
import img5 from '../Assets/pc0.png';
import img6 from '../Assets/pc3.jpg';


const Card = () => {
    return (
      <div>
        <div className='flex items-center justify-evenly gap-4'>
          <div className="shadow-lg w-[220px] p-4">
            <div className="w-[100px] m-auto">
              <img src={img1} alt="" className="w-full" />
            </div>
            <div className="flex items-center px-2 py-4">
              <div>
                <p className='font-bold'>
                  $99.50 <span className='text-[14px] text-[#9a9da0] line-through'>$ 1128.00</span>
                </p>
                <p className="flex items-center text-[#e47200] gap-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>7.5</span>
                </p>
                <p className="text-[#9a9da0]">
                  GoPro Hero6 4k Action Camera-Black
                </p>
              </div>
              <div className='mb-[3rem]'>
                <BsHeart className='text-[#0d99ff]'/>
              </div>
            </div>
          </div>
          <div className="shadow-lg w-[220px] p-4">
            <div className="w-[140px] m-auto">
              <img src={img2} alt="" className="w-full" />
            </div>
            <div className="flex items-center px-2 py-4">
              <div>
                <p className='font-bold'>
                  $99.50 <span className='text-[14px] text-[#9a9da0] line-through'>$ 1128.00</span>
                </p>
                <p className="flex items-center text-[#e47200] gap-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>7.5</span>
                </p>
                <p className="text-[#9a9da0]">
                  GoPro Hero6 4k Action Camera-Black
                </p>
              </div>
              <div className='mb-[3rem]'>
                <BsHeart className='text-[#0d99ff]'/>
              </div>
            </div>
          </div>
          <div className="shadow-lg w-[220px] p-4">
            <div className="w-[140px] m-auto">
              <img src={img3} alt="" className="w-full" />
            </div>
            <div className="flex items-center px-2 py-4">
              <div>
                <p className='font-bold'>
                  $99.50 <span className='text-[14px] text-[#9a9da0] line-through'>$ 1128.00</span>
                </p>
                <p className="flex items-center text-[#e47200] gap-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>7.5</span>
                </p>
                <p className="text-[#9a9da0]">
                  GoPro Hero6 4k Action Camera-Black
                </p>
              </div>
              <div className='mb-[3rem]'>
                <BsHeart className='text-[#0d99ff]'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card
