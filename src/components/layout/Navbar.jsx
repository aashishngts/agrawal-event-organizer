import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/agrawal-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-black fixed w-full z-50 shadow-sm">
      <div className="max-w-full mx-10 px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Agrawal Events Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3 text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full transition-all duration-300 font-medium
                ${
                  isActive
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-red-600 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* 🔽 Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col items-center gap-4 uppercase text-sm tracking-wider">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-red-600 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
