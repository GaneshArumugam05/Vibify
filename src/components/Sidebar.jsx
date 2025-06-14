import React from 'react';
// Icons
import { IoIosAdd } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed top-14 left-2 w-[24rem] h-[calc(100vh-4rem)] bg-zinc-900 text-white rounded-xl shadow-lg border border-zinc-700 z-40 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 mb-6">
        <h3 className="font-bold text-sm">Your Library</h3>
        <span className="p-1 hover:bg-zinc-800 rounded-full cursor-pointer transition">
          <IoIosAdd size={24} className="text-gray-300 hover:text-white" />
        </span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1  px-6 space-y-6 pb-4 flex flex-col items-center">
        {/* Card 1 */}
        <div className="bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 transition w-[23rem]">
          <h1 className="text-sm font-semibold text-white mb-1">Create your first playlist</h1>
          <p className="text-xs text-gray-400">It's easy, we’ll help you.</p>
          <button className="bg-white px-4 py-1.5 text-black font-bold text-sm rounded-full mt-4 hover:bg-gray-200 transition">
            Create playlist
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 transition w-[23rem]">
          <h1 className="text-sm font-semibold text-white mb-1">Let’s find some podcasts</h1>
          <p className="text-xs text-gray-400">We’ll keep you updated.</p>
          <button className="bg-white px-4 py-1.5 text-black font-bold text-sm rounded-full mt-4 hover:bg-gray-200 transition">
            Browse Podcasts
          </button>
        </div>

        {/* Legal Links */}
        <div className="text-left text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-2 pt-6 w-full">
          <span className="hover:underline cursor-pointer">Legal</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
          <span className="hover:underline cursor-pointer">Privacy Center</span>
          <span className="hover:underline cursor-pointer">About Us</span>
          <span className="hover:underline cursor-pointer">Accessibility</span>
        </div>

        {/* Language Button */}
        <div className="pt-4 w-full">
          <button className="bg-black text-white flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm border border-white hover:bg-zinc-800 transition focus:ring-2 focus:ring-white">
            <FiGlobe size={18} />
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
