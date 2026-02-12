import { useState } from "react";

const Login = ({ isOpen, onClose }) => {
  const [role, setRole] = useState(""); // Dropdown initially blank
  const [email, setEmail] = useState(""); // Email input
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Role: ${role}\nEmail: ${email}`);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/20">

      {/* Modal Box */}
      <div className="relative w-[380px] p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-white/40 animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-xl cursor-pointer transition"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Please login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Role Select */}
          <div>
            <label className="text-sm text-gray-600">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            >
              <option value="" disabled>
                Choose Role
              </option>
              <option value="owner">Academy Owner</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 cursor-pointer shadow-lg"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
