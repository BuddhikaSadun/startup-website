import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            NewTech Technologies
          </h2>
          <p className="text-sm">
            We build modern websites, apps, and cloud solutions to help
            businesses grow in the digital age.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#overview" className="hover:text-white">
                Overview
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-white">
                Work
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-2 text-sm mb-4">
            <li>Email: info@newTech.com</li>
            <li>Phone: +94 11 123 1234</li>
            <li>Colombo, Sri Lanka</li>
          </ul>

          <div className="flex space-x-4">
            <a
              href=""
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <span className="text-white text-lg">
                <FaFacebook />
              </span>
            </a>
            <a
              href="https://twitter.com/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition"
            >
              <span className="text-white text-lg">
                <FaX />
              </span>
            </a>
            <a
              href="https://www.instagram.com/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
            >
              <span className="text-white text-lg">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <span className="text-white text-lg">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NewTech Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
