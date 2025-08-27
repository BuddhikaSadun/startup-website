import React from "react";
import { motion } from "framer-motion";

function Work({ work }) {
  return (
    <motion.section
      className="p-20 bg-white rounded-xl m-5 shadow-md"
      initial={{ opacity: 0, y: 50 }} // start invisible & slightly shifted down
      whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl font-semibold mb-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {work.title}
      </motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {work.projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm bg-gray-50"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{project.category}</p>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Work;
