import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import FooterImg from "../../assets/images/Footer.jpeg";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white pt-16 md:pt-20 pb-10 overflow-hidden"
      style={{
        backgroundImage: `url(${FooterImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-full mx-10 px-4 md:px-6">
        {/* ================= LOGO & DESCRIPTION ================= */}
        <div className="text-center mb-12">
          <img
            src={logo}
            alt="Agarwal Sound & Lighting Logo"
            className="mx-auto w-36 sm:w-44 md:w-56 lg:w-64 object-contain"
          />

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base">
            At Agarwal, we specialize in complete event service solutions
            including professional PA systems, advanced lighting equipment, SFX
            systems, truss structures, LED walls, and more. From live concerts
            and weddings to corporate meets and public exhibitions, we engineer
            experiences that leave a lasting impact.
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 uppercase tracking-widest text-xs sm:text-sm mb-14">
          <a href="/" className="hover:text-red-500 transition">
            Home
          </a>
          <a href="/about" className="hover:text-red-500 transition">
            About
          </a>
          <a href="/services" className="hover:text-red-500 transition">
            Services
          </a>
          <a href="/events" className="hover:text-red-500 transition">
            Events
          </a>
          <a href="/contact" className="hover:text-red-500 transition">
            Contact
          </a>
        </div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-center md:text-left">
          {/* Branch Office */}
          <div>
            <h3 className="text-red-600 uppercase tracking-widest mb-4">
              Branch Office
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Scheme No 54 <br />
              Indore, Madhya Pradesh <br />
              452010
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-red-600 uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300">+91 99999 99999</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-red-600 uppercase tracking-widest mb-4">
              Email Us
            </h3>
            <p className="text-gray-300 break-words">
              agrawalsoundlight@gmail.com
            </p>
          </div>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex justify-center gap-5 mt-14 text-lg">
          <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition" />
          <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
          <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-14 text-xs text-gray-400 border-t border-gray-700 pt-6 text-center md:text-left gap-4">
          <p>
            © 2026{" "}
            <span className="font-semibold text-white">
              AGARWAL SOUND & LIGHTING SYSTEMS PVT. LTD.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3 uppercase tracking-wider">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
