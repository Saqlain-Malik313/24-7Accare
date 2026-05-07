import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
  const [openPopup, setOpenPopup] = useState(false);
  const [status, setStatus] = useState(null);

  const form = useRef();

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uc7qbp9",
        "template_oyh2pk9",
        form.current,
        "0pxXW0g4SYrDQDEx5"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();

        setTimeout(() => {
          setStatus(null);
          setOpenPopup(false);
        }, 3000);
      })
      .catch(() => {
        setStatus("error");

        setTimeout(() => {
          setStatus(null);
        }, 3000);
      });
  };

  return (
    <div className="py-20 bg-gray-100 text-center relative overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#0b1c39] mb-12">
        What They Say About Our Services
      </h1>

      {/* SIDE FLOATING IMAGES */}
      <div className="hidden lg:block">
        <img
          src="https://themewagon.github.io/aircon/img/testimonial-1.jpg"
          className="w-16 h-16 rounded-full absolute left-20 top-40 animate-pulse"
        />
        <img
          src="https://themewagon.github.io/aircon/img/testimonial-2.jpg"
          className="w-12 h-12 rounded-full absolute left-10 bottom-40 animate-pulse"
        />
        <img
          src="https://themewagon.github.io/aircon/img/testimonial-3.jpg"
          className="w-14 h-14 rounded-full absolute left-32 bottom-20 animate-pulse"
        />

        <img
          src="https://themewagon.github.io/aircon/img/testimonial-1.jpg"
          className="w-16 h-16 rounded-full absolute right-20 top-40 animate-pulse"
        />
        <img
          src="https://themewagon.github.io/aircon/img/testimonial-2.jpg"
          className="w-12 h-12 rounded-full absolute right-10 bottom-40 animate-pulse"
        />
        <img
          src="https://themewagon.github.io/aircon/img/testimonial-3.jpg"
          className="w-14 h-14 rounded-full absolute right-32 bottom-20 animate-pulse"
        />
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

        {/* REVIEW BUTTON */}
        <div className="mt-10">
          <button
            onClick={() => setOpenPopup(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Share Your Review
          </button>
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {openPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setOpenPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-5 text-[#0b1c39]">
                Share Your Experience
              </h2>

              {/* FORM */}
              <form ref={form} onSubmit={sendEmail} className="space-y-4">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your review..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Submit Review
                </button>

                {/* STATUS */}
                {status === "success" && (
                  <p className="text-green-600 font-medium text-center">
                    Review sent successfully ✅
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 font-medium text-center">
                    Failed to send review ❌
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
