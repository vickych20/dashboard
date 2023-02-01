import React from 'react';
import './easy.css';

const Easy = () => {
  return (
    <div className="btn flex items-center justify-around">
      <div>
        <h1 className="text-[30px] font-bold text-[#fff] px-[10px]">
          An easy way to send request to all suppliers
        </h1>
        <p className="text-[#fff]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          assumenda{" "}
        </p>
      </div>
      <div className="bg-[#fff] w-[38%] px-[30px]">
        <h1 className="text-[20px] font-bold">send quote to suppliers</h1>
        <input
          type=""
          placeholder="what item you need ? "
          className="border-[1px] border-gray-300 outline-none px-[135px] items-start py-1 mb-4 rounded-md"
        />
        <br />
        <textarea
          name=""
          id=""
          cols="60"
          rows="3"
          placeholder="type more details"
          className="border-[1px] border-gray-300 outline-none mb-4 rounded-md"
        ></textarea>
        <div className="flex items-center gap-4 ">
          <button className="twxt-[#000] font-bold px-8 items-start flex py-2 ml-8 rounded-lg border-[1px] border-gray-400 bg-[#fff]">
            Quantity
          </button>
          <select
            name="cars"
            id="cars"
            className="twxt-[#000] font-bold px-8 items-start flex py-2 ml-8 rounded-lg border-[1px] border-gray-400 bg-[#fff] outline-none"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button className="font-bold px-8 items-start flex py-2 ml-8 rounded-lg border-[1px] border-gray-400 text-[#fff] outline-none mb-4 mt-4 bg-[#0d99ff]">
          send inquiry
        </button>
      </div>
    </div>
  );
}

export default Easy
