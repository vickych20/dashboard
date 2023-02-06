import React from 'react'
import './homeoutdoor.css';
import img1 from '../Assets/n1.jpg'
import img2 from '../Assets/n2.jpg'
import img3 from '../Assets/n3.jpg'
import img4 from '../Assets/n5.jpg'
import img5 from '../Assets/n6.jpg'
import img6 from '../Assets/n8.jpg'
import img7 from '../Assets/p1.jpg'
import img8 from '../Assets/p2.jpg'
import img9 from '../Assets/p3.jpg'


const Homeoutdoor = () => {
  return (
    <div className="flex items-center justify-center mx-[1rem] py-4 shadow-lg pra flex-wrap max-md:justify-center">
      <div className="home w-[270px] h-[260px]">
        <h1 className='font-bold px-8 py-4'>Home and Outdoor</h1>
        <button className='twxt-[#000] font-bold px-4 py-2 ml-8 rounded-lg border-[1px] border-gray-400 bg-[#fff]'>Source now</button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4 text-[13px]">
            <p className="font-bold">Soft chairs</p>
            <span className=''>from 19</span>
          </div>
          <div>
            <img src={img9} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img1} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img8} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img2} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img3} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img4} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img6} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img7} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeoutdoor
