import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "9971507454";

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1c39] mb-6">
              Welcome To Best Cooling & Heating Service Center
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <img src="https://themewagon.github.io/aircon/img/icon/icon-07-primary.png" className="w-8 sm:w-10" />
                <h5 className="font-semibold text-sm sm:text-base">Expert Technician</h5>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://themewagon.github.io/aircon/img/icon/icon-09-primary.png" className="w-8 sm:w-10" />
                <h5 className="font-semibold text-sm sm:text-base">Best Quality Services</h5>
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos.
            </p>

            <div className="border-t pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* 📞 PHONE WITH DROPDOWN */}
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-500 rounded-full text-white">
                    <FaPhoneAlt />
                  </div>
                  <h5 className="font-semibold text-sm sm:text-base">
                    {phoneNumber}
                  </h5>
                </div>

                {open && (
                  <div className="absolute mt-2 w-44 bg-white shadow-xl rounded-lg p-2 z-50 border">
                    
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <FaPhoneAlt /> Call Now
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

              {/* 📧 EMAIL */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-500 rounded-full text-white">
                  <FaEnvelope />
                </div>
                <h5 className="font-semibold text-sm sm:text-base">
                  danish.malik.7503@gmail.com
                </h5>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "about-1.jpg",
              "about-2.jpg",
              "about-3.jpg",
              "about-4.jpg"
            ].map((img, i) => (
              <motion.img
                key={i}
                src={`https://themewagon.github.io/aircon/img/${img}`}
                className="w-full h-auto rounded-md object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
