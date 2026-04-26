import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    img: "https://themewagon.github.io/aircon/img/testimonial-2.jpg",
    text: "Expert AC ki service bahut fast thi. Technician time par aaya aur mera AC sirf 30 minutes me repair ho gaya. Highly recommended!",
    name: "Rohit Bisht",
    role: "Rudrapur, Uttarakhand",
  },
  {
    img: "https://themewagon.github.io/aircon/img/testimonial-1.jpg",
    text: "Maine Expert AC se gas filling karwayi thi, ab cooling bilkul new jaisi ho gayi. Price bhi reasonable tha 👍",
    name: "Pooja Rawat",
    role: "Kichha, Uttarakhand",
  },
  {
    img: "https://themewagon.github.io/aircon/img/testimonial-3.jpg",
    text: "Raat me AC kharab hua tha, Expert AC ne turant service di. 24/7 support sach me kaam ka hai. Bahut professional team hai.",
    name: "Amit Joshi",
    role: "Sitarganj, Uttarakhand",
  },
  {
    img: "https://themewagon.github.io/aircon/img/testimonial-1.jpg",
    text: "Expert AC ki installation service smooth thi. Proper fitting aur clean work kiya. Definitely dubara service lunga.",
    name: "Neha Pant",
    role: "Rudrapur, Uttarakhand",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="py-20 bg-gray-100 text-center relative overflow-hidden">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#0b1c39] mb-12">
        What They Say About Our Services
      </h1>

      {/* SIDE FLOATING IMAGES */}
      <div className="hidden lg:block">
        {/* Left */}
        <img src="https://themewagon.github.io/aircon/img/testimonial-1.jpg" className="w-16 h-16 rounded-full absolute left-20 top-40 animate-pulse" />
        <img src="https://themewagon.github.io/aircon/img/testimonial-2.jpg" className="w-12 h-12 rounded-full absolute left-10 bottom-40 animate-pulse" />
        <img src="https://themewagon.github.io/aircon/img/testimonial-3.jpg" className="w-14 h-14 rounded-full absolute left-32 bottom-20 animate-pulse" />

        {/* Right */}
        <img src="https://themewagon.github.io/aircon/img/testimonial-1.jpg" className="w-16 h-16 rounded-full absolute right-20 top-40 animate-pulse" />
        <img src="https://themewagon.github.io/aircon/img/testimonial-2.jpg" className="w-12 h-12 rounded-full absolute right-10 bottom-40 animate-pulse" />
        <img src="https://themewagon.github.io/aircon/img/testimonial-3.jpg" className="w-14 h-14 rounded-full absolute right-32 bottom-20 animate-pulse" />
      </div>

      {/* CENTER SLIDER */}
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[index].img}
              className="w-20 h-20 rounded-full mx-auto mb-6"
              alt=""
            />

            <p className="text-gray-600 text-lg mb-4 px-4">
              {testimonials[index].text}
            </p>

            <h5 className="font-semibold text-lg">
              {testimonials[index].name}
            </h5>
            <span className="text-gray-500">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Testimonial;
