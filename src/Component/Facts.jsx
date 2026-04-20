import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>{count}</span>;
};

const Facts = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // 🔥 only once

  const data = [
    { value: 1234, label: "Happy Clients" },
    { value: 1234, label: "Projects Succeed" },
    { value: 1234, label: "Awards Achieved" },
    { value: 1234, label: "Team Members" },
  ];

  return (
    <div ref={ref} className="relative my-16 py-20">
      
      {/* Background */}
      <img
        src="https://themewagon.github.io/aircon/img/carousel-1.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

      {/* Content */}
      <div className="relative w-full px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter target={item.value} start={inView} />
              </h1>
              <span className="text-orange-500 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Facts;