import React from "react";
import img1 from "./Assets/mk.jpg";
import img2 from "./Assets/g.jpg";
import img3 from "./Assets/m0.png";
import img4 from "./Assets/m1.png";
import img5 from "./Assets/m2.png";
import img6 from "./Assets/m7.png";
import img7 from "./Assets/mm1.png";
import { MdLocalGroceryStore, MdOutlineVerifiedUser } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Related from "./pages/Related";

const Service = () => {
  return (
    <div>
      <div className="flex items-start gap-3 py-8">
        <div>
          <img src={img1} alt="" />
          <div>
            <div className="flex items-center gap-3 py-4">
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <img
                src={img1}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-8 text-[#0adb0e]">
            <MdLocalGroceryStore />
            <p>In stock</p>
          </p>
          <h1 className="font-bold">
            Menns Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          <div className="flex items-center gap-4">
            <p className="flex items-center text-[#e47200] gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>7.5</span>
            </p>
            <p className="flex items-center">
              <VscPreview />

              <p> 32 reviews</p>
            </p>
            <p className="flex items-center">
              <AiOutlineSolution />
              <p>154 sold</p>
            </p>
          </div>
          <div className="bg-[#edd2a4] flex items-center gap-4 my-4">
            <div className="border-r-2 border-gray-500 p-2">
              <p>$127.00</p>
              <p>50-100 pcs</p>
            </div>
            <div className="border-r-2 border-gray-500 p-2">
              <p>$127.00</p>
              <p>50-100 pcs</p>
            </div>
            <div>
              <p>$127.00</p>
              <p>50-100 pcs</p>
            </div>
          </div>
          <div className="leading-9 py-4">
            <div className="flex items-center gap-[5rem]">
              <p>Price:</p>
              <p>Negotiable</p>
            </div>
            <div>
              <div className="flex items-center] gap-[5rem]">
                <div>
                  <p>Type:</p>
                </div>
                <div>
                  <p>Classic shoes</p>
                </div>
              </div>
              <div className="flex items-center] gap-[4rem]">
                <div>
                  <p>Material:</p>
                </div>
                <div>
                  <p>Plastic material</p>
                </div>
              </div>
              <div className="flex items-center] gap-[70px]">
                <p>Design:</p>
                <p>Modern nice</p>
              </div>
            </div>
            <div>
              <div className="flex items-center] gap-[20px]">
                <p>Customization:</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex items-center] gap-[50px]">
                <p>Protection:</p>
                <p>Plastic material</p>
              </div>
              <div className="flex items-center] gap-[55px]">
                <p>Warranty:</p>
                <p>2 years full warranty</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-300 rounded-md p-2">
          <div className="flex items-center pb-2 gap-8 shadow-md py-4">
            <div className="border-[1px] border-gray-300 bg-[#a6e0db] p-1 px-4">
              R
            </div>
            <div className="font-bold text-[16px]">
              Supplier Guanjol Trading LLC
            </div>
          </div>
          <div className="py-8">
            <div className="flex items-center gap-[40px] py-[2px] px-4">
              <img src={img2} alt="" className="w-[30px]" />
              <p>Germany,Berlin</p>
            </div>
            <div className="flex items-center gap-[60px] px-4">
              <MdOutlineVerifiedUser />
              <p>verified Seller</p>
            </div>
            <div className="flex items-center gap-[60px] px-4">
              <TbWorld />
              <p>WorldWide Shipping</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <button className="font-bold px-8 py-1 rounded-lg border-[1px] border-gray-400 text-[#fff] outline-none bg-[#0d99ff] ml-4 w-[260px]">
              Send inquiry
            </button>
            <button className="font-bold px-8 py-1 rounded-lg border-[1px] border-gray-400 text-[#000] outline-none bg-[#ffffff] ml-4 mb-4 w-[260px]">
              Sellers profile
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-[80%]">
          <Tabs>
            <TabList
              className="flex items-center gap-[5rem] mx-[3rem]
          pb-4"
            >
              <Tab className="font-bold text-[20px]">Description 1</Tab>
              <Tab className="font-bold text-[20px]">Reviews</Tab>
              <Tab className="font-bold text-[20px]">Shiping</Tab>
              <Tab className="font-bold text-[20px]">About Company</Tab>
            </TabList>

            <TabPanel>
              <h2 className="w-[70%] py-4 mx-[2rem] bg-[#37cd3c66] p-3">
                Click on any of the modules on the interactive graphic below to
                see a more detailed description of the content and download a
                copy of our bite sized learning brochure. We have highlighted in
                pink the modules we think are most relevant to this topic but
                you may see other modules that are relevant to your specific
                situation. You can take the whole highlighted learning path or
                choose just the specific modules you need right now to build a
                unique learning path tailored to your needs.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="w-[70%] py-4 mx-[2rem] bg-[#32249d66] p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                error repellat corrupti dolore iste maxime non quasi nisi
                pariatur eum! Quia recusandae deleniti molestiae facere a
                aliquam quidem, voluptates totam hic illum maxime eum ducimus
                maiores eveniet magnam fugit repellendus reiciendis et sequi
                quasi possimus. Incidunt repudiandae consectetur doloremque
                amet, eligendi distinctio odio voluptas sint velit praesentium
                quod sit cumque eaque, natus ipsa facilis, eius explicabo porro.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="w-[70%] py-4 mx-[2rem] bg-[#cd378266] p-3">
                Discover our latest thinking and experience on matrix management
                from working with hundreds of organizations and tens of
                thousands of participants in workshops on this topic around the
                world. From the authors of the book Making the Matrix Work
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="w-[70%] py-4 mx-[2rem] bg-[#cd983766] p-3">
                Group of people getting ready for a virtual meeting Even before
                COVID 19, 84% of managers and professionals worked in virtual
                teams at least part of the time. Virtual working is sure to
                increase further. Well managed virtual teams can be up to 40%
                more productive than co-located teams – but only if they adapt
                their ways of working to their virtual challenges. Read our book
                Leading remo
              </h2>
            </TabPanel>
          </Tabs>
          <div className="flex items-start mx-[3rem] list-none gap-[rem] py-4 text-[17px]">
            <div className="border-[1px] border-gray-300 w-[10rem] bg-gray-200">
              <li className="border-[1px] border-gray-300">Model</li>
              <li className="border-[1px] border-gray-300">Style</li>
              <li className="border-[1px] border-gray-300">Certificate</li>
              <li className="border-[1px] border-gray-300">Size</li>
              <li className="border-[1px] border-gray-300">Memory</li>
            </div>
            <div>
              <li className="border-[1px] border-gray-300">#98676756</li>
              <li className="border-[1px] border-gray-300">classic style</li>
              <li className="border-[1px] border-gray-300">ISO-856873697</li>
              <li className="border-[1px] border-gray-300">
                34mm * 450mm * 19mm
              </li>
              <li className="border-[1px] border-gray-300">36GB RAM</li>
            </div>
          </div>
          <div className=" mx-[3rem] leading-6">
            <div className="flex items-center gap-2">
              ✔<p>Some great feature name here</p>
            </div>
            <div className="flex items-center gap-2">
              ✔<p>Some great feature name here</p>
            </div>
            <div className="flex items-center gap-2">
              ✔<p>Some great feature name here</p>
            </div>
            <div className="flex items-center gap-2">
              ✔<p>Some great feature name here</p>
            </div>
          </div>
        </div>
        <div className="w-[20%] mr-[2rem]">
          <h1>You may like</h1>
          <div>
            <div className="flex gap-5">
              <img
                src={img4}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <div>
                <p>Apple watch series space gray</p>
                <p className="text-[#8b8888]">
                  $7.00- <span className="text-[14px]">$99.50</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                src={img5}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <div>
                <p>Apple watch series space gray</p>
                <p className="text-[#8b8888]">
                  $7.00- <span className="text-[14px]">$99.50</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                src={img6}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <div>
                <p>Apple watch series space gray</p>
                <p className="text-[#8b8888]">
                  $7.00- <span className="text-[14px]">$99.50</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                src={img3}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <div>
                <p>Apple watch series space gray</p>
                <p className="text-[#8b8888]">
                  $7.00- <span className="text-[14px]">$99.50</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img
                src={img7}
                alt=""
                className="w-[90px] border-[1px] border-gray-300 p-2"
              />
              <div>
                <p>Apple watch series space gray</p>
                <p className="text-[#8b8888]">
                  $7.00- <span className="text-[14px]">$99.50</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Related/>
    </div>
  );
};

export default Service;
