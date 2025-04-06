import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Hey! I'm <span className="font-semibold text-yellow-300">Vishal Gaikwad</span>, a passionate{" "}
          <span className="text-yellow-300">Full-Stack Developer</span> who loves crafting web experiences with 
          <span className="text-yellow-300"> React</span>, 
          <span className="text-yellow-300"> Node.js</span>, and a sprinkle of 
          <span className="text-yellow-300"> chai energy ☕</span>.
        </p>
        <p className="mt-4 text-gray-300">
          Currently exploring animations with <span className="text-yellow-300">Framer Motion</span> and building my creative developer portfolio.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
