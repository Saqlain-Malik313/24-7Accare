import React from "react";
import { motion } from "framer-motion";
import About from "../Component/About";

const Aboutus = () => {
    return (
        <>
            <div className="relative w-full py-20 mb-10 overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://themewagon.github.io/aircon/img/carousel-1.jpg"
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

                {/* Content */}
                <div className="relative w-full px-4 sm:px-6 lg:px-16 text-center">

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Us
                    </motion.h1>

                    {/* Breadcrumb */}
                    <motion.div
                        className="flex justify-center items-center gap-2 text-sm sm:text-base text-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <a href="/" className="hover:text-orange-500">Home</a>
                        <span>/</span>
                        <a href="#" className="hover:text-orange-500">Pages</a>
                        <span>/</span>
                        <span className="text-orange-500">About</span>
                    </motion.div>

                </div>
            </div>
            <About />
        </>
    );
};

export default Aboutus;