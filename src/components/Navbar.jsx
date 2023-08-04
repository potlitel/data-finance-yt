import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // eslint-disable-next-line no-undef
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4  hover:text-greenColor">
          <a href="#Hero">Home</a>
        </li>

        <li className="p-4 hover:text-greenColor">
          <a href="#Analytics">Company</a>
        </li>
        <li className="p-4 hover:text-greenColor">
          <a href="#Newsletters">Resources</a>
        </li>
        <li className="p-4 hover:text-greenColor">
          <a href="#Cards">About</a>
        </li>
        <li className="p-4 hover:text-greenColor">
          <a href="#Footer">Contacts</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r p-4 border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <li className="p-4 border-b border-gray-600">
          <a href="#Hero">Home</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#Analytics">Company</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#Newsletters">Resources</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#Cards">About</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#Footer">Contacts</a>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
