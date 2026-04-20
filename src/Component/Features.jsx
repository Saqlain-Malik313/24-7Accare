import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "https://themewagon.github.io/aircon/img/icon/icon-08-light.png",
    title: "Trusted Service Center",
    desc: "Tempor erat elitr rebum at clita.",
  },
  {
    icon: "https://themewagon.github.io/aircon/img/icon/icon-10-light.png",
    title: "Reasonable Price",
    desc: "Tempor erat elitr rebum at clita.",
  },
  {
    icon: "https://themewagon.github.io/aircon/img/icon/icon-06-light.png",
    title: "24/7 Supports",
    desc: "Tempor erat elitr rebum at clita.",
  },
];

const Features = () => {
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
              Few Reasons Why People Choosing Us!
            </h1>

            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            </p>

            {/* LIST */}
            <div className="space-y-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* ICON */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-orange-500 rounded-full flex-shrink-0">
                    <img src={item.icon} className="w-6 sm:w-8" alt="" />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <h5 className="font-semibold mb-1 text-sm sm:text-base">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative h-[250px] sm:h-[350px] lg:h-[400px] rounded overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://themewagon.github.io/aircon/img/feature.jpg"
              alt="feature"
              className="absolute w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Features;