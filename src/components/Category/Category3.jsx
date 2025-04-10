import React from "react";
import Image1 from "../../assets/category/homepod.png";
import Image2 from "../../assets/category/smart-ring.png";
import Image3 from "../../assets/category/camera.png";
import Button from "../Shared/Button";

function Category3() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[#DD571C] to-[#DD571C]/80 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-5">Homepod</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-[#DD571C]"}
                />
              </div>
            </div>
            <img src={Image1} alt="Earphone Image" className="w-[200px] sm:w-[170px] absolute right-5 top-10" />
          </div>
          {/* second col */}
          
          <div className="py-10 pl-5 bg-gradient-to-br from-[#C28888] to-[#C38888]/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">Gadget</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-[#C28888]"}
                />
              </div>
            </div>
            <img src={Image2} alt="Watch Image" className="w-[270px] absolute -right-[40px] lg:top-[10px]" />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/80 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">Camera</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-black/90"}
                />
              </div>
            </div>
            <img src={Image3} alt="Laptop Image" className="w-[200px] lg:w-[250px]  xl:w-[320px] absolute top-1/2 -translate-y-1/2 right-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category3
