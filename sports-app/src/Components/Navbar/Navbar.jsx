import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sportimg.png";
import Login from "../Login/Login"; // adjust path if needed

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
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

              <Link className="text-black hover:text-cyan-600 transition" to="/academies">
                Academies
              </Link>

              <a className="text-black hover:text-cyan-600 transition" href="#about">
                About Us
              </a>
              <a className="text-black hover:text-cyan-600 transition" href="#contact">
                Contact
              </a>

              {/* Login Button */}
              <button
                onClick={() => setShowLogin(true)}
                className="
                  px-5 py-2.5
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
              </button>
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
              <Link className="block text-black" to="/">
                Home
              </Link>
              <Link className="block text-black" to="/academies">
                Academies
              </Link>
              <a className="block text-black" href="#about">
                About
              </a>
              <a className="block text-black" href="#contact">
                Contact
              </a>

            <button
            type="button"
  onClick={() => {
    setShowLogin(true);
    setOpen(false);
  }}
  className="
    block w-full text-center
    py-2.5
    rounded-full
    font-medium
    text-white
    bg-gradient-to-r from-cyan-400 to-blue-600
    hover:from-cyan-500 hover:to-blue-700
    transition
    !cursor-pointer
  "
>
  Login
</button>

            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default Navbar;
