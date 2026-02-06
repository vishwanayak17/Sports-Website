import React, { useState } from "react";
import logo from "../../assets/sportimg.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sports Academy Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="font-semibold text-lg text-black">
              Sports Academy
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a className="text-black hover:text-cyan-600 transition" href="/">
              Home
            </a>
            <a className="text-black hover:text-cyan-600 transition" href="#academies">
              Academies
            </a>
            <a className="text-black hover:text-cyan-600 transition" href="#about">
              About
            </a>
            <a className="text-black hover:text-cyan-600 transition" href="#contact">
              Contact
            </a>

            {/* Login Button */}
            <a
              href="#login"
              className="
                px-4 py-2
                rounded-full
                font-medium
                text-white
                bg-gradient-to-r from-cyan-400 to-blue-600
                hover:from-cyan-500 hover:to-blue-700
                transition
                shadow
              "
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-black"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-4 space-y-3">
            <a className="block text-black" href="/">Home</a>
            <a className="block text-black" href="#academies">Academies</a>
            <a className="block text-black" href="#about">About</a>
            <a className="block text-black" href="#contact">Contact</a>

            {/* Mobile Login Button */}
            <a
              href="#login"
              className="
                block text-center
                py-2
                rounded-full
                font-medium
                text-white
                bg-gradient-to-r from-cyan-400 to-blue-600
                hover:from-cyan-500 hover:to-blue-700
                transition
              "
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
