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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{about.title}</h2>

        {/* Brief Intro */}
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {about.brief}
        </p>

        {/* Key Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {about.values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
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
