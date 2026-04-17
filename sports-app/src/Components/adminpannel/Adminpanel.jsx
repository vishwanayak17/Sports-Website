
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Building2,
  Settings,
  Menu,
  Bell,
  Search,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
} from "lucide-react";

import Tablelist from "../Tablelist/Tablelist";
import logo from "../../assets/sportimg.png";

// ─────────────────────────────────────────────────────────────────────
export default function SportsAdminPanel() {
  const [open, setOpen]                       = useState(true);
  const [active, setActive]                   = useState("Dashboard");
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  const [academySubTab, setAcademySubTab]     = useState("overview");
  const [showForm, setShowForm]               = useState(false);
  const [form, setForm]                       = useState({ name: "", city: "", sport: "" });

  const handleSubmit = () => {
    console.log("New Academy:", form);
    setForm({ name: "", city: "", sport: "" });
    setShowForm(false);
  };

  // Jab academy row pe click ho — detail view kholta hai
  const handleSelectAcademy = (academy) => {
    setSelectedAcademy(academy);
    setAcademySubTab("overview");
  };

  // Back button — list pe wapas
  const handleBack = () => {
    setSelectedAcademy(null);
  };

  // Sidebar nav click — page change + detail band
  const handleNavClick = (label) => {
    setActive(label);
    setSelectedAcademy(null);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 mt-20 to-slate-200">

      {/* ── SIDEBAR ── */}
      <motion.aside
        animate={{ width: open ? 240 : 80 }}
        className="bg-slate-900 text-white flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {open && (
            <div className="flex items-center gap-2">
              <img src={logo} className="w-8 h-8 rounded object-cover" alt="logo" />
              <h1 className="font-bold">Admin</h1>
            </div>
          )}
          <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

        <nav className="p-3 space-y-2">
          <MenuItem icon={<LayoutDashboard />} label="Dashboard" open={open} active={active} setActive={handleNavClick} />
          <MenuItem icon={<Building2 />}       label="Academies" open={open} active={active} setActive={handleNavClick} />
          <MenuItem icon={<Settings />}        label="Settings"  open={open} active={active} setActive={handleNavClick} />
        </nav>
      </motion.aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white/80 backdrop-blur shadow px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 bg-slate-100 px-3 py-2 rounded-lg w-72">
            <Search size={18} />
            <input className="bg-transparent outline-none w-full text-sm" placeholder="Search..." />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <img src={logo} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 overflow-y-auto">

          {/* DASHBOARD */}
          {active === "Dashboard" && <DashboardSection />}

          {/* ACADEMIES */}
          {active === "Academies" && (
            <div className="space-y-4">

              {selectedAcademy ? (
                /* ── DETAIL VIEW ── */
                <AcademyDetail
                  academy={selectedAcademy}
                  subTab={academySubTab}
                  setSubTab={setAcademySubTab}
                  onBack={handleBack}
                />
              ) : (
                /* ── LIST VIEW ── */
                <>
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-700">Academies</h2>
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow"
                    >
                      + Add Academy
                    </button>
                  </div>

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
                      <div className="md:col-span-3 flex justify-end gap-2">
                        <button
                          onClick={() => setShowForm(false)}
                          className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSubmit}
                          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tablelist — onRowClick pass kar rahe hain */}
                  <Tablelist onRowClick={handleSelectAcademy} />
                </>
              )}
            </div>
          )}

          {/* SETTINGS */}
          {active === "Settings" && <SettingsSection />}

        </main>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// ACADEMY DETAIL COMPONENT
// academiesFullData ke real fields use kar raha hai:
// name, image, area, city, rating, sports, status,
// phone, email, timing, address,
// description, achievements, facilities, gallery, map
// ─────────────────────────────────────────────────────────────────────
function AcademyDetail({ academy, subTab, setSubTab, onBack }) {

  const statusStyle = {
    approved: "bg-green-100 text-green-700",
    pending:  "bg-yellow-100 text-yellow-700",
    rejected: "bg-red-100 text-red-700",
  };

  const tabs = ["overview", "facilities", "gallery", "map"];

  return (
    <div className="space-y-5">

      {/* ── Breadcrumb + Back ── */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 border border-gray-300 px-3 py-1.5 rounded-lg transition hover:bg-gray-100"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <span className="text-sm text-gray-400">
          Academies <span className="mx-1">/</span>
          <span className="text-gray-700 font-medium">{academy.name}</span>
        </span>
      </div>

      {/* ── Header Card ── */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Cover Image */}
        <div className="relative h-52 w-full">
          <img
            src={academy.image}
            alt={academy.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />

          {/* Name + Area on image */}
          <div className="absolute bottom-4 left-5 text-white">
            <h2 className="text-2xl font-bold drop-shadow">{academy.name}</h2>
            <div className="flex items-center gap-1 mt-1 text-white/90 text-sm">
              <MapPin size={13} />
              <span>{academy.area}, {academy.city}</span>
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-lg shadow">
            <Star size={13} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">{academy.rating}</span>
          </div>
        </div>

        {/* Info below image */}
        <div className="p-5">

          {/* Sports tags + Status + Buttons */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              {academy.sports.map((sport) => (
                <span key={sport} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {sport}
                </span>
              ))}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyle[academy.status] || "bg-gray-100 text-gray-600"}`}>
                {academy.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="border border-gray-300 text-gray-600 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-50 transition">
                Edit
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm shadow transition">
                Message
              </button>
            </div>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem icon={<Phone size={13} />}  label="Phone"   value={academy.phone} />
            <InfoItem icon={<Mail size={13} />}   label="Email"   value={academy.email} isEmail />
            <InfoItem icon={<Clock size={13} />}  label="Timing"  value={academy.timing} />
            <InfoItem icon={<MapPin size={13} />} label="Address" value={academy.address} />
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="flex border-b border-gray-200 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`px-5 py-2.5 text-sm font-medium capitalize border-b-2 transition-colors ${
              subTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Tab: Overview ── */}
      {subTab === "overview" && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{academy.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AchievCard label="Players Trained" value={academy.achievements.players}    color="blue" />
            <AchievCard label="Total Students"  value={academy.achievements.students}   color="green" />
            <AchievCard label="Experience"      value={academy.achievements.experience} color="purple" />
          </div>
        </div>
      )}

      {/* ── Tab: Facilities ── */}
      {subTab === "facilities" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Facilities</h3>
          <div className="flex flex-wrap gap-3">
            {academy.facilities.map((facility, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Gallery ── */}
      {subTab === "gallery" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {academy.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Map ── */}
      {subTab === "map" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Location</h3>
          <iframe
            src={academy.map}
            title="Academy Location"
            className="w-full h-72 rounded-lg border border-gray-200"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}

    </div>
  );
}

// ─── Info Item ────────────────────────────────────────────────────────
function InfoItem({ icon, label, value, isEmail }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-gray-400 mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className={`text-sm font-medium ${isEmail ? "text-blue-600" : "text-gray-800"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

// ─── Achievement Card ─────────────────────────────────────────────────
function AchievCard({ label, value, color }) {
  const colors = {
    blue:   "bg-blue-100 text-blue-700",
    green:  "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <div className={`${colors[color]} p-5 rounded-xl shadow hover:scale-105 transition`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}

// ─── Sidebar Menu Item ────────────────────────────────────────────────
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

// ─── Dashboard ────────────────────────────────────────────────────────
function DashboardSection() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Star Cricket Academy",   status: "Pending" },
    { id: 2, name: "Elite Football Academy", status: "Pending" },
    { id: 3, name: "Ace Badminton Academy",  status: "Pending" },
  ]);

  const handleStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-700">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <StatCard title="Total Academies" value="25"  color="blue" />
        <StatCard title="Pending"  value={requests.filter((r) => r.status === "Pending").length}  color="yellow" />
        <StatCard title="Rejected" value={requests.filter((r) => r.status === "Rejected").length} color="red" />
        <StatCard title="Approved" value={requests.filter((r) => r.status === "Approved").length} color="green" />
        <StatCard title="Users"    value="120" color="purple" />
      </div>

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
                <td className="py-3 px-2 text-center font-medium">{item.status}</td>
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

// ─── Stat Card ────────────────────────────────────────────────────────
function StatCard({ title, value, color }) {
  const colors = {
    blue:   "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red:    "bg-red-100 text-red-700",
    green:  "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <div className={`${colors[color]} p-6 rounded-xl shadow hover:scale-105 transition`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

// ─── Settings ─────────────────────────────────────────────────────────
function SettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Admin Settings</h2>
      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Admin Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input className="w-full border p-2 rounded" placeholder="Phone" />
      </div>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">Save Settings</button>
    </div>
  );
}