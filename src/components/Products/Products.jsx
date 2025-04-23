import React from "react";
import { useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Image1 from "../../assets/product/watch-1.png";
import Image2 from "../../assets/product/watch-2.png";
import Image3 from "../../assets/product/watch-3.png";
import Image4 from "../../assets/product/watch-4.png";
import Image5 from "../../assets/product/headphone-1.png";
import Image6 from "../../assets/product/headphone-2.png";
import Image7 from "../../assets/product/headphone-3.png";
import Image8 from "../../assets/product/headphone-4.png";
import Image9 from "../../assets/product/airpod-1.png";
import Image10 from "../../assets/product/airpod-2.png";
import Image11 from "../../assets/product/airpod-3.png";
import Image12 from "../../assets/product/airpod-4.png";
import Image13 from "../../assets/product/vr-1.png";
import Image14 from "../../assets/product/vr-2.png";
import Image15 from "../../assets/product/vr-3.png";
import Image16 from "../../assets/product/vr-4.png";
import Image17 from "../../assets/product/ring-1.png";
import Image18 from "../../assets/product/ring-2.png";
import Image19 from "../../assets/product/ring-3.png";
import Image20 from "../../assets/product/ring-4.png";
import Image21 from "../../assets/product/camera-1.png";
import Image22 from "../../assets/product/camera-2.png";
import Image23 from "../../assets/product/camera-3.png";
import Image24 from "../../assets/product/camera-4.png";
import Image25 from "../../assets/product/keyboard-1.png";
import Image26 from "../../assets/product/keyboard-2.png";
import Image27 from "../../assets/product/keyboard-3.png";
import Image28 from "../../assets/product/keyboard-4.png";
import Button from "../Shared/Button";

const productsData = [
  {
    id: 1,
    img: Image1,
    title: "Apple Watch Series 10",
    price: "548",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "Fire-Bolt Hurricane",
    price: "142",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "Apple Watch Ultra",
    price: "799",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Image4,
    title: "Fit-Bit Charge 6",
    price: "175",
    aosDelay: "600",
  },

  {
    id: 5,
    img: Image5,
    title: "Beats Headphone",
    price: "239",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Image6,
    title: "JBL Headphone",
    price: "189",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Image7,
    title: "boAt Headphone",
    price: "125",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Image8,
    title: "SONY Headphone",
    price: "385",
    aosDelay: "600",
  },

  {
    id: 9,
    img: Image9,
    title: "Apple Airpods Pro 2",
    price: "372",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Image10,
    title: "Apple Airpods 4 Gen",
    price: "206",
    aosDelay: "200",
  },
  {
    id: 11,
    img: Image11,
    title: "Samsung Galaxy Buds3 Pro",
    price: "125",
    aosDelay: "400",
  },
  {
    id: 12,
    img: Image12,
    title: "SONY WF-1000XM5 Bluetooth",
    price: "385",
    aosDelay: "600",
  },
  {
    id: 13,
    img: Image13,
    title: "Apple Vision Pro",
    price: "3499",
    aosDelay: "0",
  },
  {
    id: 14,
    img: Image14,
    title: "Meta Quest 3S",
    price: "499",
    aosDelay: "200",
  },
  {
    id: 15,
    img: Image15,
    title: "HTC Vive Headset",
    price: "799",
    aosDelay: "400",
  },
  {
    id: 16,
    img: Image16,
    title: "Samsung Gear VR Headset",
    price: "429",
    aosDelay: "600",
  },

  {
    id: 17,
    img: Image17,
    title: "Samsung Galaxy Smart Ring",
    price: "399",
    aosDelay: "0",
  },
  {
    id: 18,
    img: Image18,
    title: "boAt Smart Ring",
    price: "45",
    aosDelay: "200",
  },
  {
    id: 19,
    img: Image19,
    title: "Aabo AI Smart Ring",
    price: "145",
    aosDelay: "400",
  },
  {
    id: 20,
    img: Image20,
    title: "Gabit Smart Ring",
    price: "160",
    aosDelay: "600",
  },

  {
    id: 21,
    img: Image21,
    title: "NIKON Z6 Mirrorless",
    price: "3399",
    aosDelay: "0",
  },
  {
    id: 22,
    img: Image22,
    title: "Canon EOS 1500D",
    price: "489",
    aosDelay: "200",
  },
  {
    id: 23,
    img: Image23,
    title: "SONY Alpha ILCE-6600M",
    price: "1333",
    aosDelay: "400",
  },
  {
    id: 24,
    img: Image24,
    title: "FUJIFILM X-M5 Mirrorless",
    price: "966",
    aosDelay: "600",
  },
 
  {
    id: 25,
    img: Image25,
    title: "Dell Pro Compact Silent Keyboard and Mouse",
    price: "49",
    aosDelay: "600",
  },

  {
    id: 26,
    img: Image26,
    title: "ASUS Wireless Keyboard and Mouse",
    price: "29",
    aosDelay: "600",
  },
  {
    id: 27,
    img: Image27,
    title: "HP 230 Wireless Keyboard and Mouse",
    price: "54",
    aosDelay: "600",
  },

  {
    id: 28,
    img: Image28,
    title: "Apple Magic Keyboard with Touch ID and Magic Mouse",
    price: "259",
    aosDelay: "600",
  },
];

function useToggleProducts(initialVisibleCount = 8) {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll
    ? productsData
    : productsData.slice(0, initialVisibleCount);

  const toggleProducts = () => setShowAll((prev) => !prev);

  return { visibleProducts, showAll, toggleProducts };
}

function Products() {
  const { visibleProducts, showAll, toggleProducts } = useToggleProducts();
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={visibleProducts} />
        <div className="text-center mt-8">
          <button
            onClick={toggleProducts}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
