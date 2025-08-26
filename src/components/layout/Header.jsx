import React from "react";

function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
      <h2 className="text-2xl font-bold text-gray-800">Logo</h2>
      <ul className="flex gap-6 list-none">
        <li>
          <a
            href="#hero"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Hero
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            About us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer text-gray-700 hover:text-blue-600"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
