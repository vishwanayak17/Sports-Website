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

import logo from "../../assets/sportimg.png";

export default function SportsAdminPanel() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 mt-20">

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

        <main className="p-6">
          {active === "Dashboard" && <Dashboard />}
          {active === "Academies" && <Page title="Academies Management" />}
          {active === "Settings" && <Page title="Admin Settings" />}
        </main>

      </div>
    </div>
  );
}

/* ================= MENU ================= */

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

/* ================= DASHBOARD ================= */

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Welcome Admin 👋</h2>
          <p className="opacity-90 text-sm mt-1">
            Manage your sports academies and performance
          </p>
        </div>

        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
          + New Academy
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title="Total Academies" value="18" />
      </div>

      {/* ACADEMY TABLE */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Academy Request</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">City</th>
              <th className="border-b p-2">Sports</th>
              <th className="border-b p-2">Status / Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <Row name="Ahmedabad Cricket Academy" city="Ahmedabad" sport="Cricket" />
            <Row name="Gandhinagar Football Club" city="Gandhinagar" sport="Football" />
            <Row name="Ace Badminton Academy" city="Ahmedabad" sport="Badminton" />
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* ================= TABLE ROW WITH BUTTONS ================= */

function Row({ name, city, sport }) {
  const [status, setStatus] = useState("Pending");

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-2">{name}</td>
      <td>{city}</td>
      <td>{sport}</td>

      <td className="py-2">
        {status === "Pending" ? (
          <div className="flex gap-2">
            <button
              onClick={() => setStatus("Active")}
              className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
            >
              Accept
            </button>

            <button
              onClick={() => setStatus("Rejected")}
              className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        ) : (
          <span
            className={`px-3 py-1 text-xs rounded font-semibold ${
              status === "Active"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status}
          </span>
        )}
      </td>
    </tr>
  );
}

/* ================= OTHER COMPONENTS ================= */

function Card({ title, value }) {
  return (
    <div className="bg-white/60 backdrop-blur p-5 rounded-2xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}

function Page({ title }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}
