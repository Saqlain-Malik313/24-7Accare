import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicePage() {

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const brands = [
        {
            name: "Mitsubishi AC",
            img: "https://mitsubishielectric.in/uploads/productimage/1713863818-60771786-ac.jpg",
            rating: 4.8,
            jobs: "1200+ Repairs",
        },
        {
            name: "O General AC",
            img: "https://m.media-amazon.com/images/I/51hZ01R+lOL._AC_UF894,1000_QL80_.jpg",
            rating: 4.7,
            jobs: "950+ Repairs",
        },
        {
            name: "Hitachi AC",
            img: "https://mahajanelectronics.com/cdn/shop/files/51_i_qHkM-L._SL1500_ae506567-c531-4ee3-9dcc-e6e79c6ad5b4.jpg?v=1776480702&width=1500",
            rating: 4.6,
            jobs: "800+ Repairs",
        },
        {
            name: "Voltas AC",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8UJ6Rbmd8rW3KYyODRx3KmlrnDj0sagDgA&s",
            rating: 4.7,
            jobs: "1100+ Repairs",
        },
        {
            name: "Blue Star AC",
            img: "https://consumer.bluestarindia.com/cdn/shop/files/3.DNU_Right_3624e9bd-cf74-40fc-8c58-2995022c8e79.jpg?v=1758480077&width=2100",
            rating: 4.5,
            jobs: "700+ Repairs",
        },
        {
            name: "LG AC",
            img: "https://m.media-amazon.com/images/I/81x7fHJHjiL._AC_UF1000,1000_QL80_.jpg",
            rating: 4.9,
            jobs: "1500+ Repairs",
        },
        {
            name: "Haier AC",
            img: "https://www.yeskart.in/cdn/shop/files/71mNSEtzI_L._SL1200.jpg?v=1743767277",
            rating: 4.6,
            jobs: "600+ Repairs",
        },
        {
            name: "Godrej AC",
            img: "https://rukminim2.flixcart.com/image/480/640/knexksw0/air-conditioner-new/b/n/i/gic-18ntc3-wsa-1-5-split-godrej-inverter-original-imag23d7fu4rhvag.jpeg?q=90",
            rating: 4.5,
            jobs: "500+ Repairs",
        },
    ];

    const services = [
        {
            title: "AC Repair",
            desc: "All brands AC repair with gas filling & cooling fix",
            price: "Starting ₹499",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_igM2alUMyVmC9f86i1Ox_UQe5aDJvBM1g&s",
        },
        {
            title: "AC Service",
            desc: "Complete cleaning, jet wash & maintenance",
            price: "Starting ₹499",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25PuE7LRlEF9b9wcDUGSXU2xfdbAa0goKzg&s",
        },
        {
            title: "AC Installation",
            desc: "Split & Window AC installation with warranty",
            price: "Starting ₹599 to ₹1199 ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EEwKuAiLISXcELrSulIrGyl3nd3-Xh5sUw&s",
        },
        {
            title: "Fridge Repair",
            desc: "Cooling issue, gas leak & compressor repair",
            price: "Starting ₹499",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH2U2VLLhBugyfcz4lEhI8v5Ia29WIvuGFA&s",
        },
        {
            title: "Washing Machine",
            desc: "Motor, drum & PCB repair service",
            price: "Starting ₹399",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCS7Gcof7tQQmtxynnwjacnfW3SJ1afzNjZQ&s",
        },
        {
            title: "Geyser Repair",
            desc: "Heating issue & thermostat repair",
            price: "Starting ₹299",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifzrv-Q0Q_XyM6JLFxU7jrQ57CpamP7UDxA&s",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* BRANDS */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-8">
                    All Brand AC Repair
                </h2>

                <motion.div
                    className="grid md:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        show: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {brands.map((b, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >

                            <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
                                <img
                                    src={b.img}
                                    alt={b.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-lg">{b.name}</h3>

                                <div className="flex items-center justify-center text-yellow-500 text-sm mt-1">
                                    <Star size={16} className="mr-1" />
                                    {b.rating}
                                </div>

                                <p className="text-gray-500 text-sm">{b.jobs}</p>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* SERVICES */}
            <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-center mb-8">
                    Our Services
                </h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        show: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                        >

                            <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="p-5 text-center">
                                <h3 className="font-semibold text-lg">{s.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
                                <p className="mt-3 font-semibold text-blue-600">{s.price}</p>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
}
