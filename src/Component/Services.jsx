import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    img: "https://themewagon.github.io/aircon/img/service-1.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-01-light.png",
    title: "AC Installation",
  },
  {
    img: "https://themewagon.github.io/aircon/img/service-2.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-02-light.png",
    title: "Cooling Services",
  },
  {
    img: "https://themewagon.github.io/aircon/img/service-3.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-03-light.png",
    title: "Heating Services",
  },
  {
    img: "https://themewagon.github.io/aircon/img/service-4.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-04-light.png",
    title: "Maintenance & Repair",
  },
  {
    img: "https://themewagon.github.io/aircon/img/service-5.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-05-light.png",
    title: "Indoor Air Quality",
  },
  {
    img: "https://themewagon.github.io/aircon/img/service-6.jpg",
    icon: "https://themewagon.github.io/aircon/img/icon/icon-06-light.png",
    title: "Annual Inspections",
  },
];

const Services = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12 md:py-16">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14 px-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1c39] leading-snug break-words">
            We Provide Professional Heating & Cooling Services
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="relative w-full overflow-hidden rounded-xl shadow-sm group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              
              {/* Image wrapper */}
              <div className="w-full h-52 sm:h-60 md:h-64 lg:h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur flex items-center">
                
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-orange-500 flex-shrink-0">
                  <img src={item.icon} className="w-6 sm:w-7" alt="" />
                </div>

                {/* Title */}
                <button
                  className="text-left text-sm sm:text-base md:text-lg font-semibold text-[#0b1c39] px-3 sm:px-4 py-3 w-full"
                >
                  {item.title}
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;