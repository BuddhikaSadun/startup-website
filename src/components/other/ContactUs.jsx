import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import contactImage from "../../assets/images/contactUs.jpg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Form */}
      <motion.div
        className="px-8 py-6 flex flex-col justify-center bg-white rounded-lg shadow-md ml-15"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validate()) {
              setSubmitted(true);

              // SweetAlert Success Message
              Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting us.",
                icon: "success",
                confirmButtonColor: "#2563eb", // Tailwind's blue-600
              });

              // Reset form
              setFormData({ name: "", email: "", message: "" });
            }
          }}
          noValidate
          className="space-y-3"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        className="flex items-center justify-center "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={contactImage}
          alt="Contact"
          className="max-w-[110%] max-h-[500px] object-cover "
        />
      </motion.div>
    </section>
  );
}
