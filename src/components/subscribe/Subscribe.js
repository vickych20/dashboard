import React from 'react'

const Subscribe = () => {
  return (
      <div className='text-center py-4'>
          <h1 className='font-bold text-[24px]'>Subscribe on our newsletter</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, nostrum!</p>
          <div className='py-8 '>
          <input type="email" placeholder='Email' className='px-[30px] outline-none border-[1px] border-gray-300 py-1 rounded-lg'/>
          <button className="font-bold px-8 py-1 rounded-lg border-[1px] border-gray-400 text-[#fff] outline-none bg-[#0d99ff] ml-4">subscribe</button>
              
          </div>
          
    </div>
  )
}

export default Subscribe