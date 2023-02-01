import React from 'react';
import './deals.css';
import img1 from '../Assets/pc0.png';
import img0 from '../Assets/pc1.png';
import img2 from '../Assets/pc2.jpg';
import img3 from '../Assets/pc3.jpg';
import img4 from '../Assets/pc5.jpg';


const Deals = () => {
  return (
    <div className="flex items-center mx-[5rem] py-4">
      <div className='px-4 shadow-lg py-6'>
        <h1 className="text-[30px]">Deals and offers</h1>
        <p>Hygience equipment</p>
        <div className="flex gap-3 text-[#fff]">
          <button className="p-1 h-[60px] my-4 rounded-xl text-[20px] bg-slate-700">
            04 <span className="">Days</span>
          </button>
          <button className="p-1 text-[20px] bg-slate-700  h-[60px] my-4 rounded-xl">
            23 Hour
          </button>
          <button className="p-1  text-[20px] bg-slate-700  h-[60px] my-4 rounded-xl">
            13 Min
          </button>
          <button className="p-1 text-[20px] bg-slate-700  h-[60px] my-4 rounded-xl">
            56 sec
          </button>
        </div>
      </div>
      <div className='flex items-center py-4 pb-4 gap-4'>

      
      <div className="text-center border-gray-200 shadow-lg">
        <img src={img1} alt="" className="w-[180px]" />
        <p>smart watches</p>
        <button>-25%</button>
      </div>
      <div className="text-center border-gray-200 shadow-lg py-2">
        <img src={img0} alt="" className="w-[230px]" />
        <p>laptop</p>
        <button>-15%</button>
      </div>
      <div className="text-center border-gray-200 shadow-lg">
        <img src={img2} alt="" />
        <p>GoPro cameras</p>
        <button>-45%</button>
      </div>
      <div className="text-center border-gray-200 shadow-lg">
        <img src={img3} alt="" />
        <p>Headphones</p>
        <button>-15%</button>
      </div>
      <div className="text-center border-[1px] border-gray-200 shadow-lg">
        <img src={img4} alt="" />
        <p>mobile</p>
        <button>-35%</button>
        </div>
        </div>
    </div>
  );
}

export default Deals
