import React from "react";
import { SlSocialSpotify } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import { TbBasketFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-black z-50 px-6 flex items-center shadow-md ">
      <nav className="w-full flex items-center justify-between text-white">
        {/* Left Section: Logo + Home + Search */}
        <div className="flex items-center space-x-6">
          {/* Spotify Logo */}
          <SlSocialSpotify
            className="bg-white text-black rounded-full p-1"
            size={32}
          />

          {/* Home Icon */}
          <button className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition duration-200">
            <GoHome size={22} />
          </button>

          {/* Search Bar */}
          <div className="flex items-center w-[24rem] bg-zinc-900 rounded-full px-4 py-2 border border-zinc-700 hover:bg-zinc-800 focus-within:ring-2 focus-within:ring-white transition duration-300">
            <IoIosSearch className="text-zinc-400 text-xl mr-3 hover:text-white" />
            <input
              type="search"
              placeholder="What do you want to play?"
              className="flex-grow bg-transparent text-white placeholder:text-zinc-400 focus:outline-none"
            />
            <div className="mx-3 h-5 w-px bg-white opacity-50" />
            <TbBasketFilled className="text-white text-lg" />
          </div>
        </div>

        {/* Right Section: Links */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Premium</a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Support</a>
          </li>
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Download</a>
          </li>

          {/* Divider with perfect spacing */}
          <li>
            <div className=" h-6 w-[1.5px] bg-white" />
          </li>

          <li>
            <a href="/" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <GrInstallOption className="text-lg" />
              Install App
            </a>
          </li>
          <li>
            <a href="/signup" className="text-gray-300 hover:text-white">Sign up</a>
          </li>
          <li>
            <a
              href="/login"
              className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
            >
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
