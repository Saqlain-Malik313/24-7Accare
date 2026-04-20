import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contactus = () => {
  return (
    <>
      {/* 🔥 Hero Section */}
      <div className="relative w-full py-20 mb-10 overflow-hidden">

        <img
          src="https://themewagon.github.io/aircon/img/carousel-1.jpg"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

        <div className="relative w-full px-4 sm:px-6 lg:px-16 text-center">

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>

          <motion.div className="flex justify-center gap-2 text-gray-200">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Contact</span>
          </motion.div>

        </div>
      </div>

      {/* 📩 Contact Section */}
      <div className="bg-[#f5f7fa] py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c39] mb-4">
              If You Have Any Query, Please Contact Us
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <span className="text-orange-500 font-medium"> Download Now.</span>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
              className="space-y-4"
            >
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Map */}
          <div className="w-full h-[420px]">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              className="w-full h-full border-4 border-teal-200"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contactus;