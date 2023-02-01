import React from 'react'
import img0 from '../Assets/m0.png';
import img1 from '../Assets/m1.png';
import img2 from '../Assets/m2.png';
import img4 from '../Assets/m4.png';

const Recommended = () => {
    return (
        <>
        <div>
              <h1 className='text-[30px] font-bold mx-[5rem]'>Recommended items</h1>
          </div>
      <div className="flex items-center justify-center gap-8 flex-wrap mx-[rem]">
      
      <div className="shadow-lg pb-4 max-w:[100px]">
        <img src={img0} alt="" />
        <div className="px-8">
          <h1 className="font-bold text-[24px] text-[#616063]">$10.30</h1>
          <p className="text-[#403e42]">
            T-shirts with multiple colors, for men
          </p>
        </div>
      </div>
      <div className="shadow-lg pb-4">
        <img src={img1} alt="" />
        <div className="px-8">
          <h1 className="font-bold text-[24px] text-[#616063]">$10.30</h1>
          <p className="text-[#403e42]">
            T-shirts with multiple colors, for men
          </p>
        </div>
      </div>
      <div className="shadow-lg pb-4">
        <img src={img2} alt="" />
        <div className="px-8">
          <h1 className="font-bold text-[24px] text-[#616063]">$10.30</h1>
          <p className="text-[#403e42]">
            T-shirts with multiple colors, for men
          </p>
        </div>
      
      </div>
      <div className="shadow-lg pb-4">
        <img src={img4} alt="" />
        <div className="px-8">
          <h1 className="font-bold text-[24px] text-[#616063]">$10.30</h1>
          <p className="text-[#403e42]">
            T-shirts with multiple colors, for men
          </p>
        </div>
      </div>
    </div>
</>
  );
}

export default Recommended