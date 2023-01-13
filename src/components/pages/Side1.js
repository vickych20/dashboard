import React from 'react';
import {BsFillHandbagFill} from 'react-icons/bs'
import { IoMdAdd } from "react-icons/io";

const Side1 = () => {
  return (
    <div className='w-[73%] max-md:text-[10px]'>

    

      <div className='flex items-center justify-between  border-b-2 py-2'>
            <div className="flex gap-4 px-4">
                <div className='h-[30px] w-[30px] rounded-3xl bg-yellow-700 items-center flex justify-center'>
          <BsFillHandbagFill />

                </div>
        </div>
        <div className="flex gap-6">
          <p>Products</p>
          <p>Active</p>
          <p>draft</p>
          <p>Assembly</p>
        </div>
        <div className="bg-gray-200 text-center py-2 rounded-2xl flex items-center gap-4 px-1 max-md:hidden">
          <IoMdAdd  className=''/>
          <input
            type="button" value="Add products"
            placeholder=""
            className="outline-none border-none bg-transparent w-[100px]"
          />
            </div>
           
      </div>
    </div>
    );
}

export default Side1
