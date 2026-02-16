import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white pt-20 pb-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=2000&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= LOGO & DESCRIPTION ================= */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-widest">AGARWAL</h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed text-sm">
            At Agarwal, we specialize in complete event service solutions
            including professional PA systems, advanced lighting equipment, SFX
            systems, truss structures, LED walls, and more. From live concerts
            and weddings to corporate meets and public exhibitions, we engineer
            experiences that leave a lasting impact.
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="flex justify-center gap-10 uppercase tracking-widest text-sm mb-16">
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
        <div className="grid md:grid-cols-3 gap-12 text-sm">
          {/* Branch Office */}
          <div>
            <h3 className="text-red-600 uppercase tracking-widest mb-4">
              Branch Office :
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Scheme No 54, <br/>Indore Madhya Pradesh <br/>452010
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
            <p className="text-gray-300  tracking-widest">
              agrawalsoundlight@gmail.com
            </p>
          </div>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex justify-center gap-6 mt-16 text-lg">
          <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-red-500 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition" />
          <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
          <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-xs text-gray-400 border-t border-gray-700 pt-6">
          <p>
            © 2026{" "}
            <span className="font-semibold text-white">
              AGARWAL SOUND & LIGHTING SYSTEMS PVT. LTD.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0 uppercase tracking-wider">
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
