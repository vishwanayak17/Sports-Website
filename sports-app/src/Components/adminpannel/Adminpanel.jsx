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
        <Card title="Total Players" value="1240" />
        <Card title="Total Academies" value="18" />
        <Card title="Revenue" value="₹2,45,000" />
        <Card title="Active Coaches" value="22" />
      </div>

      {/* CHART + PROGRESS */}
      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white/70 backdrop-blur p-6 rounded-3xl shadow">
          <h3 className="font-semibold mb-4">Performance Overview</h3>
          <div className="h-64 border rounded-xl flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur p-6 rounded-3xl shadow">
          <h3 className="font-semibold mb-4">Academy Performance</h3>
          <Progress label="Cricket Academy" value={85} />
          <Progress label="Football Academy" value={70} />
          <Progress label="Badminton Academy" value={60} />
        </div>

      </div>

      {/* ACADEMY TABLE */}
      <div className="bg-white/70 backdrop-blur p-6 rounded-3xl shadow">
        <h3 className="font-semibold mb-4">Academy List</h3>

        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b">
            <tr>
              <th className="pb-2">Academy</th>
              <th className="pb-2">City</th>
              <th className="pb-2">Sport</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <Row name="Ahmedabad Cricket Academy" city="Ahmedabad" sport="Cricket" status="Active" />
            <Row name="Gandhinagar Football Club" city="Gandhinagar" sport="Football" status="Pending" />
            <Row name="Ace Badminton Academy" city="Ahmedabad" sport="Badminton" status="Active" />
          </tbody>
        </table>
      </div>

      {/* ACTIVITY */}
      <div className="bg-white/70 backdrop-blur p-6 rounded-3xl shadow">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <Timeline text="New academy registered" />
        <Timeline text="Player joined training batch" />
        <Timeline text="Coach added to academy" />
        <Timeline text="Revenue updated" />
      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function Card({ title, value }) {
  return (
    <div className="bg-white/60 backdrop-blur p-5 rounded-2xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Timeline({ text }) {
  return (
    <div className="border-l-2 border-blue-500 pl-3 py-2 text-sm">
      {text}
    </div>
  );
}

function Row({ name, city, sport, status }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-2">{name}</td>
      <td>{city}</td>
      <td>{sport}</td>
      <td className={status === "Active" ? "text-green-600" : "text-red-600"}>
        {status}
      </td>
    </tr>
  );
}

function Page({ title }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}
