import { data } from "autoprefixer";
import React from "react";

function Banner({ data }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="lg:h-[350px] grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* First Col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="font-bold text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p data-aos="fade-up">{data.date}</p>
          </div>
          {/* Second Col */}
          <div data-aos="zoom-in" className="h-full flex items-center ">
            <img
              src={data.image}
              alt="Banner Image"
              className={`${data.scale} scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-contain`}
            />
          </div>
          {/* Third Col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:w-full md:mx-3">
            <p data-aos="zoom-out" className="font-bold text-xl md:text-[1rem]">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-3xl sm:text-5xl md:text-[2.28rem] font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm md:text-[0.80rem] tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: data.bgColor }}
                className="bg-white py-2 px-4 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
