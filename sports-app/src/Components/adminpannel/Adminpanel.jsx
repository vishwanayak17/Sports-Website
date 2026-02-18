import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Settings,
  Menu,
  Bell,
  Search,
} from "lucide-react";

import Tablelist from "../Tablelist/Tablelist";
import logo from "../../assets/sportimg.png";

export default function SportsAdminPanel() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">

      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: open ? 240 : 80 }}
        className="bg-slate-900 text-white flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {open && (
            <div className="flex items-center gap-2">
              <img src={logo} className="w-8 h-8 rounded object-cover" />
              <h1 className="font-bold">Admin</h1>
            </div>
          )}
          <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

        <nav className="p-3 space-y-2">
          <MenuItem icon={<LayoutDashboard />} label="Dashboard" open={open} active={active} setActive={setActive} />
          <MenuItem icon={<Building2 />} label="Academies" open={open} active={active} setActive={setActive} />
          <MenuItem icon={<Settings />} label="Settings" open={open} active={active} setActive={setActive} />
        </nav>
      </motion.aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white/80 backdrop-blur shadow px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-2 rounded-lg w-72">
            <Search size={18} />
            <input className="bg-transparent outline-none w-full text-sm" placeholder="Search..." />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src={logo} className="w-10 h-10 rounded-full object-cover" />
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 overflow-y-auto">

          {/* ================= DASHBOARD ================= */}
          {active === "Dashboard" && <DashboardSection />}

          {/* ================= ACADEMIES ================= */}
          {active === "Academies" && <Tablelist />}

          {/* ================= SETTINGS ================= */}
          {active === "Settings" && <SettingsSection />}

        </main>

      </div>
    </div>
  );
}

/* ================= MENU ITEM ================= */
function MenuItem({ icon, label, open, active, setActive }) {
  return (
    <div
      onClick={() => setActive(label)}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
      ${active === label ? "bg-blue-600" : "hover:bg-slate-800"}`}
    >
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}

/* ================= DASHBOARD SECTION ================= */
function DashboardSection() {
  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold text-gray-700">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-blue-700">Total Academies</h3>
          <p className="text-3xl font-bold mt-2">25</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-yellow-700">Pending</h3>
          <p className="text-3xl font-bold mt-2">6</p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-red-700">Rejected</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>

      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-3">Recent Activity</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>✔ Star Cricket Academy approved</li>
          <li>⏳ Elite Football pending</li>
          <li>❌ Ace Badminton rejected</li>
        </ul>
      </div>

    </div>
  );
}

/* ================= SETTINGS SECTION ================= */
function SettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">

      <h2 className="text-2xl font-bold">Admin Settings</h2>

      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <h3 className="font-semibold">Profile</h3>
        <input className="w-full border p-2 rounded" placeholder="Admin Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input className="w-full border p-2 rounded" placeholder="Phone" />
      </div>

      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <h3 className="font-semibold">Controls</h3>
        <label className="flex justify-between">
          Auto Approve
          <input type="checkbox" />
        </label>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Save Settings
      </button>
    </div>
  );
}
