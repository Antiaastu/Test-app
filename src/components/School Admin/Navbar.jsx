import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center rounded-xl h-[10vh] justify-between p-4 bg-white shadow-md mb-4">
      <div className="flex items-center h-[7vh] border border-gray-300 rounded-full p-2 bg-gray-100">
        <span className="text-gray-500">
            <i className="bi bi-search mr-3 text-xl"></i>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none ml-2"
        />
      </div>
      <div className="flex items-center relative">
      <span className="absolute top-[20%] right-[70%] w-2 h-2 bg-red-500 rounded-full"></span>

        <span className="text-2xl mr-4">
            <i className="bi bi-bell mr-3 text-xl"></i>
        </span>
        <img
          src="/softnet.jpg" // Replace with your profile image URL
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;