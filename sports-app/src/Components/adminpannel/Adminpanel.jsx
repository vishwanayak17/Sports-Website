import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  UserCog,
  CalendarDays,
  CreditCard,
  BarChart3,
  Settings,
  Menu,
  Bell,
  Search,
} from "lucide-react";

export default function SportsAdminPanel() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-100 mt-20">
      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: open ? 260 : 80 }}
        className="bg-slate-900 text-white flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {open && (
            <h1 className="text-lg font-bold tracking-wide">
              Sports Admin
            </h1>
          )}
          <Menu
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <nav className="p-3 space-y-2 text-sm">
          <MenuItem icon={<LayoutDashboard />} label="Dashboard" open={open} />
          <MenuItem icon={<Users />} label="Players" open={open} />
          <MenuItem icon={<UserCog />} label="Coaches" open={open} />
          <MenuItem icon={<CalendarDays />} label="Batches" open={open} />
          <MenuItem icon={<CreditCard />} label="Fees" open={open} />
          <MenuItem icon={<BarChart3 />} label="Reports" open={open} />
          <MenuItem icon={<Settings />} label="Settings" open={open} />
        </nav>
      </motion.aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-2 rounded-lg w-80">
            <Search size={18} />
            <input
              className="bg-transparent outline-none text-sm w-full"
              placeholder="Search players, coaches..."
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full"
              alt="admin"
            />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6 space-y-6">
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard title="Total Players" value="1,240" />
            <StatCard title="Active Coaches" value="18" />
            <StatCard title="Training Batches" value="12" />
            <StatCard title="Monthly Revenue" value="₹2,45,000" />
          </div>

          {/* CHART AREA */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold mb-4">Performance Overview</h2>
            <div className="h-60 flex items-center justify-center text-slate-400">
              Chart will appear here
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold mb-4">Recent Registrations</h2>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-slate-500">
                  <th className="text-left py-2">Player</th>
                  <th className="text-left">Sport</th>
                  <th className="text-left">Batch</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <TableRow name="Rahul Patel" sport="Cricket" batch="Morning" status="Active" />
                <TableRow name="Amit Shah" sport="Football" batch="Evening" status="Pending" />
                <TableRow name="Priya Mehta" sport="Badminton" batch="Morning" status="Active" />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
    </div>
  );
}

function TableRow({ name, sport, batch, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="py-3">{name}</td>
      <td>{sport}</td>
      <td>{batch}</td>
      <td>
        <span
          className={`px-2 py-1 rounded text-xs ${
            status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
