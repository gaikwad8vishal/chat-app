import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[#0f0f11] text-white"
    >
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="https://via.placeholder.com/350x350.png?text=Your+Avatar"
          alt="Vishal Avatar"
          className="w-72 h-72 md:w-96 md:h-96 object-contain"
        />
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
      >
        <p className="uppercase tracking-widest text-gray-400 text-sm md:text-base mb-2">
          Hi, I'm Vishal, I develop
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          The Perfect <br />
          <span className="text-white">Website</span>{" "}
          <span className="inline-block text-red-500 align-middle">
            ™
          </span>
        </h1>

        <p className="uppercase tracking-widest text-gray-500 mt-4">
          For your business
        </p>

        {/* Click me arrow */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-red-500 font-semibold text-sm">Click me</span>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-red-500 text-xl"
          >
            👉
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
