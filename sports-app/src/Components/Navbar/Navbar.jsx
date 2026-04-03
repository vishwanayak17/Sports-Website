import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sportimg.png";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [academy, setAcademy] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem("academy");
      if (data) setAcademy(JSON.parse(data));
      else setAcademy(null);
    };
    loadUser();
    window.addEventListener("loginSuccess", loadUser);
    return () => window.removeEventListener("loginSuccess", loadUser);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("academy");
    localStorage.removeItem("user");
    setAcademy(null);
    setShowProfile(false);
  };

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sports Academy Logo" className="h-12 w-12 lg:h-16 lg:w-16 object-contain" />
              <span className="font-semibold text-lg lg:text-xl text-black whitespace-nowrap">Sports Academy</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link className="text-black hover:text-cyan-600" to="/">Home</Link>
              <Link className="text-black hover:text-cyan-600" to="/academis">Academies</Link>
              <a className="text-black hover:text-cyan-600" href="/about">About Us</a>
              <a className="text-black hover:text-cyan-600" href="/Contactus">Contact</a>

              {academy ? (
                <div className="relative" ref={dropdownRef}>
                  {/* Profile Button */}
                  <button
                    onClick={() => setShowProfile(!showProfile)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:shadow-md transition"
                  >
                    {/* Profile Icon */}
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 text-white flex items-center justify-center rounded-full text-sm font-bold">
                      {academy?.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-black font-medium text-sm">Profile</span>
                    <span className="text-gray-400 text-xs">▼</span>
                  </button>

                  {/* Dropdown */}
                  {showProfile && (
                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-white text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
                          {academy?.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{academy?.name}</p>
                          <p className="text-white/80 text-xs">{academy?.email}</p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-4 space-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span>👤</span>
                          <span><b>Name:</b> {academy?.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📧</span>
                          <span><b>Email:</b> {academy?.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🔒</span>
                          <span><b>Password:</b> ••••••••</span>
                        </div>
                      </div>

                      {/* Change Password */}
                      <div className="px-4 pb-2">
                        <button
                          onClick={() => setShowChangePassword(!showChangePassword)}
                          className="w-full py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition"
                        >
                          {showChangePassword ? "Hide" : "🔑 Change Password"}
                        </button>

                        {showChangePassword && (
                          <div className="mt-3 space-y-2">
                            <input
                              type="password"
                              placeholder="Current Password"
                              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              value={passwords.current}
                              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                            />
                            <input
                              type="password"
                              placeholder="New Password"
                              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              value={passwords.newPass}
                              onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                            />
                            <input
                              type="password"
                              placeholder="Confirm New Password"
                              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              value={passwords.confirm}
                              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                            />
                            <button
                              onClick={() => alert("Change password API yahan lagao! 🔧")}
                              className="w-full py-2 rounded-xl text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition"
                            >
                              Update Password
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Logout */}
                      <div className="p-4 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full py-2 rounded-xl text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition"
                        >
                          🚪 Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-cyan-400 to-blue-600"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-cyan-400 to-blue-600"
                  >
                    Signup as an Academy
                  </button>
                </>
              )}
            </div>

            {/* Mobile Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white shadow-lg rounded-xl mt-2 p-4 space-y-3">
              <Link to="/">Home</Link>
              <Link to="/academis">Academies</Link>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>

              {academy ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-white flex items-center justify-center rounded-full font-bold">
                      {academy?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{academy?.name}</p>
                      <p className="text-gray-500 text-xs">{academy?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 rounded-full text-white bg-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { setShowLogin(true); setOpen(false); }}
                    className="w-full py-2 rounded-full text-white bg-blue-500"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setShowSignup(true); setOpen(false); }}
                    className="w-full py-2 rounded-full text-white bg-blue-500"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <Signup isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
}

export default Navbar;