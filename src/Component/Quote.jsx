import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="relative min-h-[450px] flex items-center"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/aircon/img/carousel-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

          <motion.div
            className="relative px-6 sm:px-10 lg:px-12 text-white"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              For Individuals And Organisations
            </h1>

            <p className="text-gray-200 mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-medium rounded">
              More Details
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div
          className="relative min-h-[450px] flex items-center"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/aircon/img/carousel-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0b1c39]/70"></div>

          <motion.div
            className="relative w-full px-6 sm:px-10 lg:px-12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* GLASS FORM */}
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-white/20">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-white/30 bg-white/20 text-white placeholder-gray-200 p-3 w-full rounded outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-white/30 bg-white/20 text-white placeholder-gray-200 p-3 w-full rounded outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Your Mobile"
                  className="border border-white/30 bg-white/20 text-white placeholder-gray-200 p-3 w-full rounded outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Service Type"
                  className="border border-white/30 bg-white/20 text-white placeholder-gray-200 p-3 w-full rounded outline-none focus:border-orange-500"
                />

                <textarea
                  placeholder="Message"
                  rows="3"
                  className="border border-white/30 bg-white/20 text-white placeholder-gray-200 p-3 w-full rounded col-span-1 sm:col-span-2 outline-none focus:border-orange-500"
                ></textarea>

                <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 font-medium rounded col-span-1 sm:col-span-2">
                  Get A Free Quote
                </button>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Quote;