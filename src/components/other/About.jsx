import React from "react";
import { motion } from "framer-motion";

function About({ about }) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Text */}
      <motion.div
        className="p-16 flex flex-col justify-center bg-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{about.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{about.content}</p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="w-full h-[300px] md:h-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={about.image}
          alt={about.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export default About;
