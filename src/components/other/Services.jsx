import React from "react";

function Services({ service }) {
  return (
    <section className="p-20 bg-gray-50 rounded-xl m-5 shadow-md">
      <h2 className="text-2xl font-semibold mb-8">{service.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
