import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import img1 from '../Assets/in.jpeg';
import img2 from '../Assets/in0.jpg';
import img3 from '../Assets/in1.jpg';

const Our = () => {
  return (
    <div className='flex justify-center items-center gap-4 flex-wrap'>
      <div className="w-[260px] shadow-lg mx-[2rem]">
        <img src={img1} alt="" />
        <span>
          <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right buttom-[20px] relative">
            <AiOutlineSearch />
          </div>
        </span>
        
        <p className='px-4 py-8'>source from industry hubs</p>
      </div>
      <div className="w-[260px] shadow-lg mx-[2rem]">
        <img src={img3} alt="" />
        <span>
          <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right buttom-[20px] relative">
            <AiOutlineSearch />
          </div>
        </span>
        
        <p className='px-4 py-8'>source from industry hubs</p>
      </div>
      <div className="w-[260px] shadow-lg mx-[2rem]">
        <img src={img2} alt="" />
        <span>
          <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right buttom-[20px] relative">
            <AiOutlineSearch />
          </div>
        </span>
        
        <p className='px-4 py-8'>source from industry hubs</p>
      </div>
      <div className="w-[260px] shadow-lg mx-[2rem]">
        <img src={img2} alt="" />
        <span>
          <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right buttom-[20px] relative">
            <AiOutlineSearch />
          </div>
        </span>
        
        <p className='px-4 py-8'>source from industry hubs</p>
      </div>
    </div>
  );
}

export default Our