import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contactus = () => {

  const form = useRef();
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uc7qbp9",
      "template_oyh2pk9",
      form.current,
      "0pxXW0g4SYrDQDEx5"
    )
    .then(() => {
      setStatus("success");
      form.current.reset();

      setTimeout(() => setStatus(null), 3000);
    })
    .catch(() => {
      setStatus("error");

      setTimeout(() => setStatus(null), 3000);
    });
  };

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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>

          <motion.div
            className="flex justify-center gap-2 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              {/* 📞 Mobile + Service */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="user_mobile"
                  placeholder="Your Mobile"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />

                <input
                  type="text"
                  name="service"
                  placeholder="Service (AC Repair, Installation...)"
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                  required
                />
              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Map */}
                    <div className="w-full h-[300px] sm:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3490.7953103402974!2d79.42309977551297!3d28.963795075485535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU3JzQ5LjciTiA3OcKwMjUnMzIuNCJF!5e0!3m2!1sen!2sin!4v1777193367289!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 🔥 Toast Popup */}
      {status && (
        <div className="fixed top-5 right-5 z-50">
          <div
            className={`px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300
              ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            {status === "success"
              ? "Message sent successfully ✅"
              : "Failed to send ❌"}
          </div>
        </div>
      )}
    </>
  );
};

export default Contactus;
