import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Settings,
  Menu,
  Bell,
  Search,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tablelist from "../Tablelist/Tablelist";
import logo from "../../assets/sportimg.png";
import API from "../../api/axios";

export default function SportsAdminPanel() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.dispatchEvent(new Event("loginSuccess"));
    navigate("/");
  };

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

        {/* ✅ Logout Button */}
        <div className="mt-auto p-3 border-t border-slate-700">
          <div
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition text-white"
          >
            <LogOut size={20} />
            {open && <span>Logout</span>}
          </div>
        </div>
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
          {active === "Dashboard" && <DashboardSection />}
          {active === "Academies" && <Tablelist />}
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
  const [stats, setStats] = useState({
    total: 0, pending: 0, rejected: 0, approved: 0
  });
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/academies");
        if (res.data.success) {
          const all = res.data.data;
          setStats({
            total: all.length,
            pending: all.filter(a => !a.status || a.status === "pending").length,
            rejected: all.filter(a => a.status === "rejected").length,
            approved: all.filter(a => a.status === "approved").length,
          });
          // show last 5 academies
          setRecent(all.slice(-5));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-700">Admin Dashboard</h2>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Academies" value={stats.total} color="blue" />
        <StatCard title="Approved" value={stats.approved} color="green" />
        <StatCard title="Pending" value={stats.pending} color="yellow" />
        <StatCard title="Rejected" value={stats.rejected} color="red" />
      </div>

      {/* RECENT TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Recent Academies</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left py-3 px-2">Academy Name</th>
              <th className="text-left py-3 px-2">City</th>
              <th className="text-left py-3 px-2">Sports</th>
              <th className="text-left py-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((a) => (
              <tr key={a._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-2">{a.academyName || "N/A"}</td>
                <td className="py-3 px-2">{a.city || "N/A"}</td>
                <td className="py-3 px-2">
                  {a.sports?.length > 0 ? a.sports.join(", ") : "N/A"}
                </td>
                <td className="py-3 px-2 font-medium">
                  {a.status || "pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
function StatCard({ title, value, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
  };
  return (
    <div className={`${colors[color]} p-6 rounded-xl shadow hover:scale-105 transition`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
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
