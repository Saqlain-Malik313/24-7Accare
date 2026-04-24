import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://themewagon.github.io/aircon/img/carousel-1.jpg",
    title: "Quality Heating & Air Conditioning Services",
    desc: "We provide reliable heating and AC solutions with expert technicians and top-quality service.",
  },
  {
    img: "https://themewagon.github.io/aircon/img/carousel-2.jpg",
    title: "Best AC Repair Services",
    desc: "Professional AC repair and maintenance services delivered by trusted and experienced experts.",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={slides[index].img}
            alt="slide"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">

              <motion.h1
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-3xl md:text-5xl font-bold mb-6"
              >
                {slides[index].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-200 text-lg mb-6 px-2 md:px-10"
              >
                {slides[index].desc}
              </motion.p>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#0b1c39]/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#0b1c39]/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
