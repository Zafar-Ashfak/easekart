import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/hero/camera1.png"
import Image5 from "../../assets/hero/speakers.png"
import Button from "../Shared/Button";
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Play Limitless",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Titan Edge",
    title: "Branded",
    title2: "Laptop",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Focus Frame",
    title: "Branded",
    title2: "Camera",
  },
  {
    id: 5,
    img: Image5,
    subtitle: "Stereo Rush",
    title: "Branded",
    title2: "Speaker",
  },
  
];

function Hero({ handleOrderPopup }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[500px] xl:min-h-[570px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0 ">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold ">
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/10 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                      <img
                        src={data.img}
                        alt="Product Image"
                        className="w-[250px] sm:w-[350px] h-[250px] sm:h-[420px] sm:scale-105 lg:scale-110 object-contain mx-auto mt-3 drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.5)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
