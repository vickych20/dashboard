import React from 'react';
import { TbBrandGooglePlay } from 'react-icons/tb';
import { AiFillApple, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiTelegram, SiYoutubemusic } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import './footer.css';

function Footer() {
    return (
      <div className="flex justify-center items-start bot mb-[30px] flex-wrap max-lg:justify-around max-xl:justify-around">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <TbBrandGooglePlay className="bg-[#0d99ff] text-[20px] text-[#fff] rounded-full h-[40px] w-[40px]" />
            <h2 className="text-[#469fdf] text-[30px]">Brand</h2>
          </div>
          <div className="w-[200px]">
            <p>
              Best information about the company gies here but noe provident.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 py-4">
              <BsFacebook className="text-[#8a8a8a] text-[25px]" />
              <IoLogoInstagram className="text-[#8a8a8a] text-[25px]" />
              <SiTelegram className="text-[#8a8a8a] text-[25px]" />
              <AiFillTwitterCircle className="text-[#8a8a8a] text-[25px]" />
              <SiYoutubemusic className="text-[#8a8a8a] text-[25px]" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">About</h1>
          <p>About us</p>
          <p>Find store</p>
          <p>Categories</p>
          <p>Blog</p>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">Parnership</h1>
          <p>About us</p>
          <p>Find store</p>
          <p>Categories</p>
          <p>Blog</p>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">information</h1>
          <p>Help center</p>
          <p>Money Refund</p>
          <p>Shipping</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">For users</h1>
          <p>Login</p>
          <p>Register</p>
          <p>Settings</p>
          <p>My Orders</p>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">Get app</h1>
          <button className="flex items-center bg-[#000] text-[#fff] px-4 rounded-md gap-2">
            <div>
              <AiFillApple className="text-[30px]" />
            </div>
            <div>
              <p className="text-[10px]">Download on the</p>
              <h1 className="font-700 text-[20px]">App Store</h1>
            </div>
          </button>
          <button className="flex items-center bg-[#000] text-[#fff] px-4 rounded-md gap-2 mt-4">
            <div>
              <IoLogoGooglePlaystore className="text-[30px]" />
            </div>
            <div>
              <p className="text-[10px]">Get it on</p>
              <h1 className="font-700 text-[17px]">Google play</h1>
            </div>
          </button>
        </div>
      </div>
    );
}

export default Footer
