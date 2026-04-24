import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "9971507454";
  return (
    <footer className="bg-[#001a4d] text-gray-300 w-full mt-16 pt-16">

      {/* MAIN CONTENT */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <h1 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
              <img src="/img/icon/icon-02-light.png" className="w-8" alt="" />
              AirCon
            </h1>
            <p className="text-sm leading-relaxed">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita. Diam dolor diam ipsum sit.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h5>
            <p className="text-sm mb-4">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-transparent border border-gray-500 px-4 py-3 pr-24 text-white placeholder-gray-400 outline-none focus:border-orange-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white text-sm">
                SignUp
              </button>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Get In Touch
            </h5>

            <p className="flex items-center gap-3 mb-3 text-sm">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </p>

            <div className="relative mb-3 text-sm">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 w-full text-left"
              >
                <FaPhoneAlt /> {phoneNumber}
              </button>

              {open && (
                <div className="absolute mt-2 w-40 bg-white text-black shadow-lg rounded-lg p-2 z-50">

                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                  >
                    <FaPhoneAlt /> Call
                  </a>

                  <a
                    href={`https://wa.me/91${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>

                </div>
              )}
            </div>
            <p className="flex items-center gap-3 text-sm">
              <FaEnvelope /> danish.malik.7503@gmail. Com
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h5>

            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-orange-500 transition">
                › AC Installation
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                › Cooling Services
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                › Heating Services
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                › Annual Inspections
              </a>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

          {/* QUICK LINKS */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h5>

            <div className="flex flex-col gap-2 text-sm">
              <a href="/about" className="hover:text-orange-500 transition">
                › About Us
              </a>
              <a href="/contact" className="hover:text-orange-500 transition">
                › Contact Us
              </a>
              <a href="/service" className="hover:text-orange-500 transition">
                › Our Services
              </a>
            </div>
          </div>

          {/* EMPTY SPACE (design balance) */}
          <div></div>

          {/* SOCIAL */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Follow Us
            </h5>

            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-orange-500 hover:border-orange-500 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-4">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-center items-center text-sm text-center">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500">24 * 7 Ac care</span>, All Right Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
