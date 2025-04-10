import React from "react";
import Button from "../Shared/Button";

function ProductCard({ data }) {
  return (
    <div className="mb-10">
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group w-[200px] h-[230px] md:w-[200px] xl:w-[240px] xl:h-[220px] my-3"
            key={data.id}>
            <div className="relative">
              <img
                src={data.img}
                alt="Products Image"
                className="h-[180px] w-[180px] xl:w-[220px]  object-contain rounded-md bg-[#e5e7eb]"
              />
              <div>
                {/* Hover Button */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[5.5rem] xl:left-[6.8rem] -translate-x-1/2 w-full text-center group-hover:backdrop:blur-sm justify-center items-center duration-200 hidden group-hover:block ease-in-out">
                  <Button
                    text={"Add to cart"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <div className="leading-7 ml-2">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
