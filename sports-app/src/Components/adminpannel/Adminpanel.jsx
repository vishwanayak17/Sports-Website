import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Building2, Settings, Menu, Bell,
  Search, ArrowLeft, MapPin, Phone, Mail, Clock,
  Star, LogOut,
} from "lucide-react";

import Tablelist from "../Tablelist/Tablelist";
import logo from "../../assets/sportimg.png";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function SportsAdminPanel() {
  const [open, setOpen]                       = useState(true);
  const [active, setActive]                   = useState("Dashboard");
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  const [academySubTab, setAcademySubTab]     = useState("overview");
  const [showForm, setShowForm]               = useState(false);

  // ✅ UPDATED: 8 fields
  const [form, setForm] = useState({
    academyName: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    area: "",
    sport: "",
  });

  const navigate = useNavigate();

  // ✅ UPDATED: API call with all fields
  const handleSubmit = async () => {
    if (!form.academyName || !form.name || !form.email || !form.password || !form.phone || !form.city || !form.area || !form.sport) {
      // alert("Sabhi fields bharo!");
      return;
    }
    try {
      const res = await API.post("/admin/academies", form);
      if (res.data.success) {
        // alert("Academy add ho gayi! ✅");
        setForm({ academyName: "", name: "", email: "", password: "", phone: "", city: "", area: "", sport: "" });
        setShowForm(false);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Kuch galat ho gaya!");
    }
  };

  const handleSelectAcademy = (academy) => {
    setSelectedAcademy(academy);
    setAcademySubTab("overview");
  };

  const handleBack = () => setSelectedAcademy(null);

  const handleNavClick = (label) => {
    setActive(label);
    setSelectedAcademy(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
    window.dispatchEvent(new Event("loginSuccess"));
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">

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

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col">

        <header className="bg-white/80 backdrop-blur shadow px-6 py-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-700">{active}</h2>
          <div className="flex items-center gap-4 mr-4">
            <img src={logo} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
          </div>
        </header>

        <main className="p-6 overflow-y-auto">

          {active === "Dashboard" && <DashboardSection />}

          {active === "Academies" && (
            <div className="space-y-4">
              {selectedAcademy ? (
                <AcademyDetail
                  academy={selectedAcademy}
                  subTab={academySubTab}
                  setSubTab={setAcademySubTab}
                  onBack={handleBack}
                />
              ) : (
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

                  {/* ✅ UPDATED FORM */}
                  {showForm && (
                    <div className="bg-white p-5 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        placeholder="Academy Name"
                        value={form.academyName}
                        onChange={(e) => setForm({ ...form, academyName: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        placeholder="Owner Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        placeholder="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <select
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select City</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Gandhinagar">Gandhinagar</option>
                      </select>
                      <input
                        placeholder="Area"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        placeholder="Sport (e.g. Cricket)"
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

                  <Tablelist onRowClick={handleSelectAcademy} />
                </>
              )}
            </div>
          )}

          {active === "Settings" && <SettingsSection />}

        </main>
      </div>
    </div>
  );
}

// ─── Academy Detail ───────────────────────────────────────────────────
function AcademyDetail({ academy, subTab, setSubTab, onBack }) {
  const statusStyle = {
    approved: "bg-green-100 text-green-700",
    pending:  "bg-yellow-100 text-yellow-700",
    rejected: "bg-red-100 text-red-700",
  };

  const tabs = ["overview", "facilities", "gallery", "map"];

  return (
    <div className="space-y-5">
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

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative h-52 w-full">
        <img
  src={academy.image || "https://placehold.co/800x300"}
  alt={academy.name}
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute bottom-4 left-5 text-white">
            <h2 className="text-2xl font-bold drop-shadow">{academy.name}</h2>
            <div className="flex items-center gap-1 mt-1 text-white/90 text-sm">
              <MapPin size={13} />
              <span>{academy.area || "N/A"}, {academy.city || "N/A"}</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-lg shadow">
            <Star size={13} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">{academy.rating || "N/A"}</span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              {academy.sports?.map((sport) => (
                <span key={sport} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {sport}
                </span>
              ))}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyle[academy.status] || "bg-gray-100 text-gray-600"}`}>
                {academy.status || "pending"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem icon={<Phone size={13} />}  label="Phone"   value={academy.phone   || "N/A"} />
            <InfoItem icon={<Mail size={13} />}   label="Email"   value={academy.email   || "N/A"} isEmail />
            <InfoItem icon={<Clock size={13} />}  label="Timing"  value={academy.timing  || "N/A"} />
            <InfoItem icon={<MapPin size={13} />} label="Address" value={academy.address || "N/A"} />
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-200 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`px-5 py-2.5 text-sm font-medium capitalize border-b-2 transition-colors ${
              subTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {subTab === "overview" && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{academy.description || "No description available."}</p>
          </div>
          {academy.achievements && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AchievCard label="Players Trained" value={academy.achievements.players    || "N/A"} color="blue" />
              <AchievCard label="Total Students"  value={academy.achievements.students   || "N/A"} color="green" />
              <AchievCard label="Experience"      value={academy.achievements.experience || "N/A"} color="purple" />
            </div>
          )}
        </div>
      )}

      {subTab === "facilities" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Facilities</h3>
          <div className="flex flex-wrap gap-3">
            {academy.facilities?.length > 0 ? academy.facilities.map((f, i) => (
              <span key={i} className="bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium">{f}</span>
            )) : <p className="text-gray-400 text-sm">No facilities listed.</p>}
          </div>
        </div>
      )}

      {subTab === "gallery" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {academy.gallery?.length > 0 ? academy.gallery.map((img, i) => (
              <img key={i} src={img} alt={`gallery-${i}`} className="w-full h-44 object-cover rounded-lg" />
            )) : <p className="text-gray-400 text-sm">No gallery images.</p>}
          </div>
        </div>
      )}

      {subTab === "map" && (
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-semibold text-gray-700 mb-4">Location</h3>
          {academy.map ? (
            <iframe src={academy.map} title="Academy Location" className="w-full h-72 rounded-lg border border-gray-200" allowFullScreen loading="lazy" />
          ) : (
            <p className="text-gray-400 text-sm">No map available.</p>
          )}
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
        <p className={`text-sm font-medium ${isEmail ? "text-blue-600" : "text-gray-800"}`}>{value}</p>
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
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${active === label ? "bg-blue-600" : "hover:bg-slate-800"}`}
    >
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────
function DashboardSection() {
  const [stats, setStats]       = useState({ total: 0, pending: 0, rejected: 0, approved: 0 });
  const [requests, setRequests] = useState([]);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/academies");
      if (res.data.success) {
        const all = res.data.data;
        setStats({
          total:    all.length,
          pending:  all.filter(a => !a.status || a.status === "pending").length,
          rejected: all.filter(a => a.status === "rejected").length,
          approved: all.filter(a => a.status === "approved").length,
        });
        setRequests(all.filter(a => !a.status || a.status === "pending"));
      }
    } catch (error) { console.log(error); }
  };

  const handleStatus = async (id, newStatus) => {
    try {
      const res = await API.put(`/admin/academies/${id}/status`, { status: newStatus.toLowerCase() });
      if (res.data.success) {
        alert(`Academy ${newStatus} successfully! ✅`);
        fetchData();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-700">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <StatCard title="Total Academies" value={stats.total}    color="blue" />
        <StatCard title="Pending"         value={stats.pending}  color="yellow" />
        <StatCard title="Rejected"        value={stats.rejected} color="red" />
        <StatCard title="Approved"        value={stats.approved} color="green" />
        <StatCard title="Users"           value="120"            color="purple" />
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
            {requests.length === 0 ? (
              <tr><td colSpan="3" className="text-center py-6 text-gray-400">No pending requests</td></tr>
            ) : (
              requests.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2">{item.name}</td>
                  <td className="py-3 px-2 text-center font-medium text-yellow-600 capitalize">{item.status || "pending"}</td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex justify-center gap-3">
                      <button onClick={() => handleStatus(item._id, "approved")} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                      <button onClick={() => handleStatus(item._id, "rejected")} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Reject</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
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
  const [profile, setProfile]   = useState({ name: "", email: "", phone: "" });
  const [passForm, setPassForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [profileLoading, setProfileLoading] = useState(false);
  const [passLoading, setPassLoading]       = useState(false);
  const [profileMsg, setProfileMsg]         = useState({ text: "", type: "" });
  const [passMsg, setPassMsg]               = useState({ text: "", type: "" });

  useEffect(() => { fetchProfile(); }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/admin/profile");
      if (res.data.success) {
        setProfile({
          name:  res.data.data.name  || "",
          email: res.data.data.email || "",
          phone: res.data.data.phone || "",
        });
      }
    } catch (error) { console.log("Profile fetch error:", error); }
  };

  const handleProfileSave = async () => {
    if (!profile.name || !profile.email)
      return setProfileMsg({ text: "Name and email are required.", type: "error" });

    setProfileLoading(true);
    setProfileMsg({ text: "", type: "" });
    try {
      const res = await API.put("/admin/update-profile", profile);
      if (res.data.success)
        setProfileMsg({ text: "Profile updated successfully! ✅", type: "success" });
    } catch (err) {
      setProfileMsg({ text: err.response?.data?.message || "Something went wrong!", type: "error" });
    } finally { setProfileLoading(false); }
  };

  const handlePassChange = (e) => setPassForm({ ...passForm, [e.target.name]: e.target.value });

  const handlePasswordChange = async () => {
    if (!passForm.currentPassword || !passForm.newPassword || !passForm.confirmPassword)
      return setPassMsg({ text: "Please fill all fields.", type: "error" });
    if (passForm.newPassword.length < 6)
      return setPassMsg({ text: "New password must be at least 6 characters.", type: "error" });
    if (passForm.newPassword !== passForm.confirmPassword)
      return setPassMsg({ text: "New passwords do not match.", type: "error" });

    setPassLoading(true);
    setPassMsg({ text: "", type: "" });
    try {
      const res = await API.put("/admin/change-password", {
        currentPassword: passForm.currentPassword,
        newPassword: passForm.newPassword,
      });
      if (res.data.success) {
        setPassMsg({ text: "Password changed successfully! ✅", type: "success" });
        setPassForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      }
    } catch (err) {
      setPassMsg({ text: err.response?.data?.message || "Something went wrong!", type: "error" });
    } finally { setPassLoading(false); }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Admin Settings</h2>

      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <h3 className="font-semibold text-gray-700">Profile Info</h3>
        {profileMsg.text && (
          <div className={`px-4 py-2 rounded-lg text-sm font-medium ${profileMsg.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {profileMsg.text}
          </div>
        )}
        <input className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Admin Name" value={profile.name}  onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
        <input className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email"      value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
        <input className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Phone"      value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
        <button onClick={handleProfileSave} disabled={profileLoading} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg transition">
          {profileLoading ? "Saving..." : "Save Settings"}
        </button>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow space-y-4">
        <h3 className="font-semibold text-gray-700">Change Password</h3>
        {passMsg.text && (
          <div className={`px-4 py-2 rounded-lg text-sm font-medium ${passMsg.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {passMsg.text}
          </div>
        )}
        <input type="password" name="currentPassword" value={passForm.currentPassword} onChange={handlePassChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Current Password" />
        <input type="password" name="newPassword"     value={passForm.newPassword}     onChange={handlePassChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="New Password" />
        <input type="password" name="confirmPassword" value={passForm.confirmPassword} onChange={handlePassChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Confirm New Password" />
        <button onClick={handlePasswordChange} disabled={passLoading} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg transition">
          {passLoading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}