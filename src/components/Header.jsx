import React from 'react';
import { FaChromecast } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
      <header className="bg-gradient-to-b from-black to-gray-950 p-5">
        <div className="text-white flex items-center justify-between flex-wrap gap-4">
          {/* Logo and title */}
          <div className="flex items-center gap-2">
            <img
              src="https://vectorwiki.com/images/qT0VQ__youtube-music.svg"
              className="w-28 pl-10"
              alt=""
            />
            <span className="text-lg font-semibold"></span>
          </div>
  
          {/* Icons section */}
          <div className="flex items-center gap-4">
          <div className="relative w-full mr- max-w-md lg:max-w-lg">
    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
    <input
      type="text"
      placeholder="Search songs,albums,artists,podcasts"
      className="lg:w-96 me-24  pl-10  py-1 bg-gray-900 text-white rounded-md border bbg-gradient-to-b from-black to-gray-850 focus:outline-none focus:ring-2  transition-all duration-300"
    />
  </div>
            <div className="pt-1">
              <FaChromecast size={24} />
            </div>
            <div className="pt-1">
              <MdOutlineAccountCircle size={24} />
            </div>
          </div>
        </div>
      </header>
    );
  }; 
  
  export default Header;