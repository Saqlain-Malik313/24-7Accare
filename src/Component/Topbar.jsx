import React, { useState } from "react";

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "9971507454";

  return (
    <div className="hidden lg:flex bg-[#001a4d] text-gray-300 text-sm px-6 py-2 justify-between items-center w-full">
      
      {/* Left Side */}
      <div className="flex items-center space-x-6">

        {/* 📞 PHONE WITH DROPDOWN */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <i className="fa fa-phone"></i>
            <span>{phoneNumber}</span>
          </div>

          {open && (
            <div className="absolute top-6 left-0 w-44 bg-white text-black shadow-lg rounded-lg p-2 z-50">
              
              <a
                href={`tel:${phoneNumber}`}
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                📞 Call Now
              </a>

              <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 hover:bg-gray-100 rounded"
              >
                💬 WhatsApp
              </a>

            </div>
          )}
        </div>

        {/* 📧 EMAIL */}
        <div className="flex items-center space-x-2">
          <i className="fa fa-envelope"></i>
          <span>danish.malik.7503@gmail.com</span>
        </div>

      </div>

      {/* Right Side (Links Added) */}
      <div className="flex items-center space-x-4">
        <a href="/" className="hover:text-white">Home</a>
        <span>/</span>
        <a href="/terms" className="hover:text-white">Terms</a>
        <span>/</span>
        <a href="/privacy" className="hover:text-white">Privacy</a>
      </div>

    </div>
  );
};

export default TopBar;
