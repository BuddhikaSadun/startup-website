import React from "react";

function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
      <h2 className="text-4xl font-bold text-gray-800">Logo</h2>
      <ul className="flex gap-20 list-none">
        {[
          { href: "#hero", label: "Hero" },
          { href: "#about", label: "About us" },
          { href: "#services", label: "Services" },
          { href: "#portfolio", label: "Portfolio" },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="relative text-xl font-medium text-gray-700 hover:text-blue-600 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-blue-600
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
