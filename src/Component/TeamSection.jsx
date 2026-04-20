import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
  { img: "/img/team-1.jpg", name: "Full Name", role: "Designation" },
  { img: "/img/team-2.jpg", name: "Full Name", role: "Designation" },
  { img: "/img/team-3.jpg", name: "Full Name", role: "Designation" },
  { img: "/img/team-4.jpg", name: "Full Name", role: "Designation" },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0b1c39]">
            Meet Our Professional Team Members
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((item, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Hover Social */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  
                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600">
                    <FaFacebookF />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600">
                    <FaTwitter />
                  </a>

                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600">
                    <FaInstagram />
                  </a>

                </div>
              </div>

              {/* Info */}
              <div className="bg-gray-100 text-center p-4">
                <h5 className="font-semibold text-lg">{item.name}</h5>
                <span className="text-orange-500 text-sm">{item.role}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;