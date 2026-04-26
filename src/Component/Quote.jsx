import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Quote = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

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
        setTimeout(() => setStatus(null), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <div className="w-full">

      {/* MOBILE FIX: stack layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center text-center lg:text-left"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/aircon/img/carousel-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

          <motion.div
            className="relative px-4 sm:px-8 lg:px-12 text-white"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Fast & Reliable AC Service
            </h1>

            <p className="text-gray-200 mb-6 text-sm sm:text-base">
              Get quick AC repair, installation & maintenance service at your doorstep.
            </p>

            <button className="bg-orange-500 px-5 py-2.5 rounded text-sm sm:text-base">
              More Details
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div
          className="relative min-h-[400px] flex items-center justify-center py-10 lg:py-0"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/aircon/img/carousel-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0b1c39]/70"></div>

          <motion.div
            className="relative w-full max-w-md px-4 sm:px-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-xl border border-white/20"
            >

              {/* MOBILE FIX: single column on small screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded outline-none text-sm"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded outline-none text-sm"
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Mobile"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded outline-none text-sm"
                />

                <input
                  type="text"
                  name="service"
                  placeholder="Service Type"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded outline-none text-sm"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded col-span-1 sm:col-span-2 outline-none text-sm"
                ></textarea>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded col-span-1 sm:col-span-2 transition text-sm sm:text-base"
                >
                  Get A Free Quote
                </button>

              </div>

            </form>
          </motion.div>
        </div>

      </div>

      {/* TOAST */}
      {status && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`px-5 py-2 rounded-lg shadow-lg text-white text-sm
              ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
          >
            {status === "success"
              ? "Quote sent successfully ✅"
              : "Something went wrong ❌"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quote;
