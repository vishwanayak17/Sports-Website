import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-blue-100">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Academy Info */}
        <div className="transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-white mb-3">
             Sports Academy
          </h2>
          <p className="text-sm leading-relaxed text-blue-200">
            Professional sports training centers in{" "}
            <span className="text-white font-semibold">Ahmedabad</span> &{" "}
            <span className="text-white font-semibold">Gandhinagar</span>.
            Train with expert coaches and world-class facilities.
          </p>
        </div>

        {/* Locations */}
        <div className="transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Locations
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 group cursor-pointer">
              <FaMapMarkerAlt className="mt-1 text-cyan-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                <b>Ahmedabad</b><br />
                Navrangpura, Bopal, Maninagar
              </span>
            </li>

            <li className="flex items-start gap-3 group cursor-pointer">
              <FaMapMarkerAlt className="mt-1 text-cyan-400 group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                <b>Gandhinagar</b><br />
                Sector 11, Sector 21, Kudasan
              </span>
            </li>
          </ul>
        </div>

        {/* Sports Programs */}
        <div className="transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Training Programs
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "🏏 Cricket Academy",
              "⚽ Football Academy",
              "🏀 Basketball Training",
              "🏸 Badminton Coaching",
              "🏊 Swimming Classes",
            ].map((sport, index) => (
              <li
                key={index}
                className="hover:text-white hover:translate-x-1 transition cursor-pointer"
              >
                {sport}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="flex items-center gap-3 text-sm hover:text-white transition cursor-pointer">
            <FaPhoneAlt className="text-green-400" />
            +91 98765 43210
          </p>

          <p className="flex items-center gap-3 text-sm mt-3 hover:text-white transition cursor-pointer">
            <FaEnvelope className="text-yellow-300" />
            info@gujaratsportsacademy.com
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaYoutube].map(
              (Icon, index) => (
                <span
                  key={index}
                  className="
                    p-2 rounded-full bg-blue-800/60 backdrop-blur
                    hover:bg-cyan-500 hover:text-black
                    hover:scale-110 hover:rotate-6
                    transition duration-300 cursor-pointer
                  "
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/50 py-4 text-center text-xs text-blue-200">
        Serving Ahmedabad & Gandhinagar · ©{" "}
        {new Date().getFullYear()} Gujarat Sports Academy
      </div>
    </footer>
  );
};

export default Footer;
