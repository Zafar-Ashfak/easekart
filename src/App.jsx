import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Category3 from "./components/Category/Category3";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import headphone from "./assets/hero/headphone.png";
import camera from "./assets/hero/camera2.png"
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData1 = {
  discount: "20% OFF",
  title: "Golden Hour",
  date: "10 May to 28 May",
  image: camera,
  scale: "2xl:scale-160", 
  title2: "Freeze The Time",
  title3: "Summer Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  bgColor: "#f42c37",
};


const BannerData2 = {
  discount: "34% OFF",
  title: "Happy Hours",
  date: "10 May to 28 May",
  image: smartwatch2,
  imageHeight: "300px",
  title2: "Smart Solo",
  title3: "Summer Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  bgColor: "#2dcc6f",
};

const BannerData3 = {
  discount: "25% OFF",
  title: "Fine Smile",
  date: "10 May to 28 May",
  image: headphone,
  imageHeight: "300px",
  title2: "Crystal Audio",
  title3: "Summer Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  bgColor: "#1f2937",
};


function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Banner data={BannerData1} />
      <Category />
      <Category2 />
      <Category3 />
      <Banner data={BannerData2} />
      <Services />
      <Products />
      <Banner data={BannerData3} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default App;