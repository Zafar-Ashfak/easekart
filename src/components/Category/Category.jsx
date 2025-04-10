import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/headphone.png";
import Button from "../Shared/Button";

function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-5">Earphone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-black/90"}
                />
              </div>
            </div>
            <img src={Image1} alt="Earphone Image" className="w-[300px] sm:w-[250px] absolute bottom-0 right-2" />
          </div>
          {/* second col */}
          
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">Watch</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img src={Image2} alt="Watch Image" className="w-[300px] absolute -right-[60px] lg:top-[20px]" />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-purple-600/90 to-purple-500/80 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-5">Headphone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-purple-600/90"}
                />
              </div>
            </div>
            <img src={Image3} alt="Laptop Image" className="w-[200px] lg:w-[250px] xl:w-[300px] absolute top-1/2 -translate-y-1/2 right-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
