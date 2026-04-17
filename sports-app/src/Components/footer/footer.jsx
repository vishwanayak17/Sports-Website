import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../../assets/sportimg.png";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-br from-blue-950 via-blue-900 to-black text-blue-100">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-12" />
            <h2 className="text-xl font-bold text-white">
              Sports Academy
            </h2>
          </div>
          <p className="text-sm text-blue-300 leading-relaxed">
            Professional sports training centers in{" "}
            <span className="text-white font-semibold">Ahmedabad</span> &{" "}
            <span className="text-white font-semibold">Gandhinagar</span>.
            Train with expert coaches and modern facilities.
          </p>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-blue-700 pb-2">
            Our Locations
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 hover:text-white transition">
              <FaMapMarkerAlt className="mt-1 text-cyan-400" />
              <span>
                <b>Ahmedabad</b><br />
                Navrangpura, Bopal, Maninagar
              </span>
            </li>
            <li className="flex items-start gap-3 hover:text-white transition">
              <FaMapMarkerAlt className="mt-1 text-cyan-400" />
              <span>
                <b>Gandhinagar</b><br />
                Sector 11, Sector 21, Kudasan
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-blue-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Academies", path: "/academies" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/Contactus" },
            ].map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-cyan-400 transition group"
                >
                  <span className="text-cyan-500 group-hover:translate-x-1 transition-transform duration-200">
                    ›
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-blue-700 pb-2">
            Contact Us
          </h3>

          <p className="flex items-center gap-3 text-sm hover:text-white transition">
            <FaPhoneAlt className="text-green-400" />
            +91 8320251290
          </p>

          <p className="flex items-center gap-3 text-sm mt-3 hover:text-white transition">
            <FaEnvelope className="text-yellow-300" />
            abc01@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-blue-800 hover:bg-cyan-400
                hover:text-black transition duration-300 cursor-pointer
                shadow-md hover:shadow-cyan-400/40"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700/40 py-4 text-center text-xs text-blue-300">
        © {new Date().getFullYear()} Sports Academy · All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;