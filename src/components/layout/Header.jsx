import React from "react";
import logo from "../../assets/images/logo.png";
function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-1 bg-blue-300   border-b border-gray-300 sticky top-0 z-50">
      <img
        src={logo} // 🔹 replace with your logo path inside public/
        alt="Logo"
        className="h-18 w-auto object-contain" // maintains proportion
      />

      <ul className="flex gap-20 list-none">
        {[
          { href: "#about", label: "About us" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "Work" },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="relative text-xl font-medium text-black hover:text-blue-600 
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
