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

  // 👉 Form State (minimal add)
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    city: "",
    sport: "",
  });

  const handleSubmit = () => {
    console.log("New Academy:", form);
    setForm({ name: "", city: "", sport: "" });
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 mt-20 to-slate-200">

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
            <input
              className="bg-transparent outline-none w-full text-sm"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src={logo} className="w-10 h-10 rounded-full object-cover" />
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 overflow-y-auto">

          {/* DASHBOARD */}
          {active === "Dashboard" && <DashboardSection />}

          {/* ACADEMIES */}
          {active === "Academies" && (
            <div className="space-y-4">

              {/* HEADER SAME STYLE */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-700">
                  Academies
                </h2>

                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow"
                >
                  + Add Academy
                </button>
              </div>

              {/* FORM CARD */}
              {showForm && (
                <div className="bg-white p-5 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">

                  <input
                    placeholder="Academy Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    placeholder="Sport"
                    value={form.sport}
                    onChange={(e) => setForm({ ...form, sport: e.target.value })}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <div className="md:col-span-3 flex justify-end">
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
                    >
                      Save
                    </button>
                  </div>

                </div>
              )}

              {/* ORIGINAL TABLELIST */}
              <Tablelist />

            </div>
          )}

          {/* SETTINGS */}
          {active === "Settings" && <SettingsSection />}

        </main>

      </div>
    </div>
  );
}

/* MENU ITEM */
function MenuItem({ icon, label, open, active, setActive }) {
  return (
    <div
      onClick={() => setActive(label)}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
      ${active === label ? "bg-blue-600" : "hover:bg-slate-800"}`}
    >
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}

/* DASHBOARD */
function DashboardSection() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Star Cricket Academy", status: "Pending" },
    { id: 2, name: "Elite Football Academy", status: "Pending" },
    { id: 3, name: "Ace Badminton Academy", status: "Pending" },
  ]);

  const handleStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold text-gray-700">
        Admin Dashboard
      </h2>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        <StatCard title="Total Academies" value="25" color="blue" />
        <StatCard title="Pending" value={requests.filter(r => r.status === "Pending").length} color="yellow" />
        <StatCard title="Rejected" value={requests.filter(r => r.status === "Rejected").length} color="red" />
        <StatCard title="Approved" value={requests.filter(r => r.status === "Approved").length} color="green" />
        <StatCard title="Users" value="120" color="purple" />

      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Academy Requests</h3>

        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left py-3 px-2">Academy Name</th>
              <th className="text-center py-3 px-2">Status</th>
              <th className="text-center py-3 px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-2">{item.name}</td>

                <td className="py-3 px-2 text-center font-medium">
                  {item.status}
                </td>

                <td className="py-3 px-2 text-center">
                  {item.status === "Pending" && (
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleStatus(item.id, "Approved")}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Active
                      </button>

                      <button
                        onClick={() => handleStatus(item.id, "Rejected")}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* STAT CARD */
function StatCard({ title, value, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className={`${colors[color]} p-6 rounded-xl shadow hover:scale-105 transition`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

/* SETTINGS */
function SettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Admin Settings</h2>

      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Admin Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input className="w-full border p-2 rounded" placeholder="Phone" />
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Save Settings
      </button>
    </div>
  );
}