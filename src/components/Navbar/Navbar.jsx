import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/website/logo.png";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Shop",
    link: "#",
  },
  {
    id: 3,
    name: "About",
    link: "#",
  },
  {
    id: 4,
    name: "Blogs",
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#",
  },
];

function Navbar({ handleOrderPopup }) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links  */}
          <div className="flex items-center">
            <img src={Logo} alt="Brand Logo" className="w-11 object-contain mr-1" />
            <a
              href="#"
              className="text-primary text-2xl uppercase font-semibold tracking-widest sm:text-3xl mr-12">
              Easekart
            </a>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500
                          hover:text-black  dark:hover:text-white duration-200">
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown Menu */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white duration-200">
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-brandBlue/20 inline-block rounded-md font-semibold">
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right Section  */}
          <div className="flex justify-between items-center gap-4">
            {/* search bar */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-brandBlue  dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Cart button     */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                5
              </div>
            </button>
            {/* Dark mode button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
