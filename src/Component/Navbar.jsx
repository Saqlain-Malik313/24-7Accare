import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  const phone = "9971507454";
  const email = "danish.malik.7503@gmail.com";

  return (
    <nav className="bg-white border-b relative z-50">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://themewagon.github.io/aircon/img/icon/icon-02-primary.png"
            alt="logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold text-[#0b1c39]">Expert-Repair-Wala</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-gray-100 px-6 py-2 rounded-md items-center space-x-6">
          <a href="/" className="text-orange-500 font-medium">Home</a>
          <a href="/about" className="hover:text-orange-500">About Us</a>
          <a href="/service" className="hover:text-orange-500">Our Services</a>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-1 hover:text-orange-500"
            >
              Pages <IoChevronDown size={14} />
            </button>

            {dropdown && (
              <div className="absolute top-10 left-0 bg-white shadow rounded w-40">
                <a href="/feature" className="block px-4 py-2 hover:bg-gray-100">Features</a>
                <a href="/quote" className="block px-4 py-2 hover:bg-gray-100">Free Quote</a>
                <a href="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
                <a href="/testimonial" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a>
                <a href="/404" className="block px-4 py-2 hover:bg-gray-100">404 Page</a>
              </div>
            )}
          </div>

          <a href="/contact" className="hover:text-orange-500">Contact Us</a>
        </div>

        {/* ✅ PHONE + EMAIL */}
        <div className="hidden lg:flex items-center space-x-5 text-sm">

          {/* Phone Dropdown */}
          <div className="relative">
            <div
              onClick={() => setPhoneOpen(!phoneOpen)}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500 cursor-pointer"
            >
              <FaPhoneAlt />
              {phone}
            </div>

            {phoneOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded w-44 z-50">
                
                <a
                  href={`tel:${phone}`}
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  📞 Call Now
                </a>

                <a
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  💬 WhatsApp
                </a>

              </div>
            )}
          </div>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
          >
            <FaEnvelope />
            {email}
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(true)}
          className="lg:hidden text-xl text-[#0b1c39]"
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 z-50`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setMobileMenu(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 space-y-4">
          <a href="/" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="/about" onClick={() => setMobileMenu(false)}>About Us</a>
          <a href="/service" onClick={() => setMobileMenu(false)}>Our Services</a>

          {/* Pages Dropdown */}
          <div>
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2"
            >
              Pages <IoChevronDown />
            </button>

            {dropdown && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <a href="/feature">Features</a>
                <a href="/quote">Free Quote</a>
                <a href="/team">Our Team</a>
                <a href="/testimonial">Testimonial</a>
                <a href="/404">404 Page</a>
              </div>
            )}
          </div>

          <a href="/contact" onClick={() => setMobileMenu(false)}>Contact Us</a>

          {/* 📞 Mobile Phone Dropdown */}
          <div className="pt-4 border-t">
            <div
              onClick={() => setPhoneOpen(!phoneOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaPhoneAlt /> {phone}
            </div>

            {phoneOpen && (
              <div className="mt-2 bg-gray-100 rounded">
                <a href={`tel:${phone}`} className="block px-3 py-2">
                  📞 Call Now
                </a>
                <a
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2"
                >
                  💬 WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Email */}
          <a href={`mailto:${email}`} className="flex items-center gap-2">
            <FaEnvelope /> {email}
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
