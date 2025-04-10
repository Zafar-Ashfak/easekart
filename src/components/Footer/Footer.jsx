import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Logo from "../../assets/website/logo.png"
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <div className="flex items-center gap-1">
            <img src={Logo} alt="Brand Logo" className="w-11 object-contain" />
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              EaseKart
            </a>
            </div>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70 ml-1">
            EaseKart is a feature-rich e-commerce platform designed to provide a seamless and enjoyable shopping experience.
            </p>
            <p className="text-gray-500 mt-4 ml-1" >
              {" "}
              &copy; 2024 Md Ashfak Alam | All rights reserved.
            </p>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Column Links */}

            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh (India) </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#"
                  ><FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#"
                  ><FaFacebook className="text-3xl hover:text-blue-700 duration-300" />
                  </a>
                  <a href="#"
                  ><FaLinkedin className="text-3xl hover:text-blue-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
