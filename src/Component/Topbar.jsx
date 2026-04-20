import React from "react";

const TopBar = () => {
  return (
    <div className="hidden lg:flex bg-[#001a4d] text-gray-300 text-sm px-6 py-2 justify-between items-center w-full">
      
      {/* Left Side */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <i className="fa fa-phone"></i>
          <span>9971507454</span>
        </div>

        <div className="flex items-center space-x-2">
          <i className="fa fa-envelope"></i>
          <span>danish.malik.7503@gmail. Com</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-white">Home</a>
        <span>/</span>
        <a href="#" className="hover:text-white">Terms</a>
        <span>/</span>
        <a href="#" className="hover:text-white">Privacy</a>
        <span>/</span>
        <a href="#" className="hover:text-white">Support</a>
      </div>

    </div>
  );
};

export default TopBar;