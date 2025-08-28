import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "about", "services", "work", "contactUs"];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center px-8 py-1 bg-blue-300 border-b border-gray-300 sticky top-0 z-50">
      <img src={logo} alt="Logo" className="h-18 w-auto object-contain" />

      <ul className="flex gap-20 list-none">
        {[
          { href: "#overview", label: "Overview" },
          { href: "#about", label: "About us" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "Work" },
          { href: "#contactUs", label: "Contact Us" },
        ].map((item, index) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <li key={index}>
              <a
                href={item.href}
                className={`relative text-xl font-medium 
                  ${isActive ? "text-blue-600" : "text-black"}
                  ${
                    !isActive
                      ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                      : ""
                  }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Header;
