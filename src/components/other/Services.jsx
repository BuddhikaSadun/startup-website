import React from "react";
import { motion } from "framer-motion";

function Services({ service }) {
  return (
    <motion.section
      className="p-20 bg-gray-50 rounded-xl m-5 shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl font-semibold mb-8 text-center text-gray-800"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {service.title}
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.services.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Full Card Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* Service Name */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
