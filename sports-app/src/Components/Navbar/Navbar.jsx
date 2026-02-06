import React from "react";

function Navbar() {
  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left Side: Trophy Icon + Site Name */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-black font-semibold text-lg tracking-wide">
              Sports Academy
            </span>
          </div>

          {/* Right Side: Menu + Button */}
          <div className="flex items-center gap-6">

            {/* Menu Links */}
            <a href="/" className="text-black hover:text-yellow-500 font-medium text-md transition">
              Home
            </a>
            <a href="#about" className="text-black hover:text-yellow-500 font-medium text-md transition">
              About
            </a>
            <a href="#features" className="text-black hover:text-yellow-500 font-medium text-md transition">
              Features
            </a>
            <a href="#contact" className="text-black hover:text-yellow-500 font-medium text-md transition">
              Contact
            </a>

            {/* CTA Button: Academy / Login */}
            <a
              href="#academy"
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400
                         rounded-full text-black font-medium hover:from-yellow-500 hover:to-orange-500
                         transition duration-300 text-md shadow"
            >
              Academy Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
