import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sportimg.png";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";   // ✅ NEW IMPORT

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // ✅ NEW STATE

  return (
<<<<<<< HEAD
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
=======
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sports Academy Logo"
                className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
              />
              <span className="font-semibold text-lg lg:text-xl text-black whitespace-nowrap">
                Sports Academy
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link className="text-black hover:text-cyan-600 transition" to="/">
                Home
              </Link>

              <Link className="text-black hover:text-cyan-600 transition" to="/academis">
                Academies
              </Link>

              <a className="text-black hover:text-cyan-600 transition" href="/about">
                About Us
              </a>
              <a className="text-black hover:text-cyan-600 transition" href="/Contactus">
                Contact
              </a>

              {/* Login Button */}
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition shadow"
              >
                Login
              </button>

              {/* Signup Button */}
              <button
                onClick={() => setShowSignup(true)}   // ✅ OPEN SIGNUP
                className="px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition shadow"
              >
                Signup as an Academy
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-black"
>>>>>>> 0045eed090aedee2d9b96ef7652ecb9b7691f254
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-4 space-y-3">
              <Link className="block text-black" to="/">
                Home
              </Link>
              <Link className="block text-black" to="/academis">
                Academies
              </Link>
              <a className="block text-black" href="/about">
                About
              </a>

              <a className="block text-black" href="#contact">
                Contact
              </a>

              {/* Login Mobile */}
              <button
                type="button"
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
                className="block w-full text-center py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition"
              >
                Login
              </button>

              {/* Signup Mobile */}
              <button
                type="button"
                onClick={() => {
                  setShowSignup(true);   // ✅ OPEN SIGNUP
                  setOpen(false);
                }}
                className="block w-full text-center py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition"
              >
                Signup as an Academy
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />

<<<<<<< HEAD
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
=======
      {/* Signup Modal */}
      <Signup isOpen={showSignup} onClose={() => setShowSignup(false)} />  {/* ✅ NEW */}
    </>
>>>>>>> 0045eed090aedee2d9b96ef7652ecb9b7691f254
  );
}

export default Navbar;
