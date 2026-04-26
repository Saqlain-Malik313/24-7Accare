import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Quote = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uc7qbp9",     // 🔴 yaha apna service id
      "template_oyh2pk9",    // 🔴 yaha template id
      form.current,
      "0pxXW0g4SYrDQDEx5"      // 🔴 yaha public key
    )
    .then(() => {
      alert("Quote request sent ✅");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed ❌");
    });
  };

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
          <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

          <motion.div
            className="relative px-6 sm:px-10 lg:px-12 text-white"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              For Individuals And Organisations
            </h1>

            <p className="text-gray-200 mb-6">
              Get quick AC service quotes for your home or business.
            </p>

            <button className="bg-orange-500 px-6 py-3 rounded">
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
          <div className="absolute inset-0 bg-[#0b1c39]/70"></div>

          <motion.div
            className="relative w-full px-6 sm:px-10 lg:px-12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-white/20"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Your Mobile"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded"
                />

                <input
                  type="text"
                  name="service"
                  placeholder="Service Type"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  required
                  className="border border-white/30 bg-white/20 text-white p-3 rounded col-span-2"
                ></textarea>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded col-span-2"
                >
                  Get A Free Quote
                </button>

              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Quote;
