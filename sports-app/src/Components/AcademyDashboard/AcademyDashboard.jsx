import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Settings,
  Menu,
  Bell,
  Edit,
  LogOut,
} from "lucide-react";
import API from "../../api/axios";
import logo from "../../assets/sportimg.png";
import { useNavigate } from "react-router-dom";

// ================= AVATAR =================
function Avatar({ name, image, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
  };

  const initials = name
    ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "A";

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover border-2 border-blue-500`}
      />
    );
  }

  return (
    <div className={`${sizes[size]} rounded-full bg-blue-600 flex items-center justify-center font-bold text-white border-2 border-blue-400`}>
      {initials}
    </div>
  );
}

// ================= MENU ITEM =================
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

// ================= MAIN =================
export default function AcademyDashboard() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const [academy, setAcademy] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("academy");
    if (data) setAcademy(JSON.parse(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("academy");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("loginSuccess"));
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 ">

      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: open ? 240 : 80 }}
        className="bg-slate-900 text-white flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {open && (
            <div className="flex items-center gap-2">
              <img src={logo} className="w-8 h-8 rounded object-cover" />
              <h1 className="font-bold text-sm">Academy Panel</h1>
            </div>
          )}
          <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>

        <nav className="p-3 space-y-2">
          <MenuItem icon={<LayoutDashboard size={20} />} label="Dashboard" open={open} active={active} setActive={setActive} />
          <MenuItem icon={<User size={20} />} label="My Profile" open={open} active={active} setActive={setActive} />
          <MenuItem icon={<Edit size={20} />} label="Update Academy" open={open} active={active} setActive={setActive} />
          <MenuItem icon={<Settings size={20} />} label="Settings" open={open} active={active} setActive={setActive} />
        </nav>

        {/* Bottom — Academy Info + Logout */}
        <div className="mt-auto p-3 border-t border-slate-700 space-y-2">
          {open && academy && (
            <div className="text-sm text-slate-300 px-1 mb-2">
              <p className="font-semibold truncate">{academy.name}</p>
              <p className="text-xs text-slate-400 truncate">{academy.email}</p>
            </div>
          )}
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
          <h2 className="text-lg font-bold text-slate-700">{active}</h2>

          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer text-slate-600" />
            <div className="flex items-center gap-2">
              <Avatar name={academy?.name} image={academy?.image} size="md" />
              {academy && (
                <span className="text-sm font-semibold text-slate-700">
                  {academy.name}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 overflow-y-auto">
          {active === "Dashboard" && <DashboardSection academy={academy} />}
          {active === "My Profile" && <MyProfile academy={academy} />}
          {active === "Update Academy" && <UpdateAcademy academy={academy} setAcademy={setAcademy} />}
          {active === "Settings" && <AcademySettings academy={academy} />}
        </main>

      </div>
    </div>
  );
}

// ================= DASHBOARD SECTION =================
function DashboardSection({ academy }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-700">
        Welcome, {academy?.name} 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-blue-700">Sports</h3>
          <p className="text-xl font-bold mt-2">
            {academy?.sports?.length > 0 ? academy.sports.join(", ") : "N/A"}
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-green-700">City</h3>
          <p className="text-2xl font-bold mt-2">{academy?.city || "N/A"}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-yellow-700">Area</h3>
          <p className="text-2xl font-bold mt-2">{academy?.area || "N/A"}</p>
        </div>
      </div>

      {/* Academy Images */}
      {academy?.gallery?.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3 text-gray-700">Academy Images</h3>
          <div className="flex gap-3 flex-wrap">
            {academy.gallery.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`academy-${i}`}
                className="w-48 h-40 object-cover rounded-xl border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      {/* Single image fallback */}
      {(!academy?.gallery || academy.gallery.length === 0) && academy?.image && (
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3 text-gray-700">Academy Image</h3>
          <img
            src={academy.image}
            alt="Academy"
            className="w-48 h-40 object-cover rounded-xl"
          />
        </div>
      )}

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-3 text-gray-700">Academy Info</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>📧 Email: {academy?.email || "N/A"}</li>
          <li>📞 Phone: {academy?.phone || "N/A"}</li>
          <li>📝 Description: {academy?.description || "N/A"}</li>
          <li>🏟️ Facilities: {academy?.facilities?.length > 0 ? academy.facilities.join(", ") : "N/A"}</li>
        </ul>
      </div>
    </div>
  );
}

// ================= MY PROFILE =================
function MyProfile({ academy }) {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-700">My Profile</h2>

      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
        <Avatar name={academy?.name} image={academy?.image} size="lg" />
        <div>
          <h3 className="text-xl font-bold">{academy?.name}</h3>
          <p className="text-gray-500">{academy?.email}</p>
          <p className="text-gray-500">{academy?.phone}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h3 className="font-semibold text-gray-700">Academy Details</h3>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">Owner Name</p>
            <p className="font-semibold">{academy?.name || "N/A"}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">Email</p>
            <p className="font-semibold">{academy?.email || "N/A"}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">City</p>
            <p className="font-semibold">{academy?.city || "N/A"}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">Area</p>
            <p className="font-semibold">{academy?.area || "N/A"}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">Sports</p>
            <p className="font-semibold">
              {academy?.sports?.length > 0 ? academy.sports.join(", ") : "N/A"}
            </p>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400">Facilities</p>
            <p className="font-semibold">
              {academy?.facilities?.length > 0 ? academy.facilities.join(", ") : "N/A"}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl">
          <p className="text-xs text-gray-400">Description</p>
          <p className="text-sm font-semibold">{academy?.description || "N/A"}</p>
        </div>

        {/* Gallery */}
        {academy?.gallery?.length > 0 && (
          <div className="bg-slate-50 p-3 rounded-xl">
            <p className="text-xs text-gray-400 mb-2">Gallery</p>
            <div className="flex gap-2 flex-wrap">
              {academy.gallery.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`gallery-${i}`}
                  className="w-24 h-20 object-cover rounded-xl border border-gray-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ================= UPDATE ACADEMY =================
function UpdateAcademy({ academy, setAcademy }) {
  const [form, setForm] = useState({
    name: academy?.name || "",
    phone: academy?.phone || "",
    description: academy?.description || "",
    image: academy?.image || "",
    area: academy?.area || "",
    city: academy?.city || "",
    sports: academy?.sports || [],
    facilities: academy?.facilities || [],
    gallery: academy?.gallery?.length > 0 ? academy.gallery : [""],
  });

  const [loading, setLoading] = useState(false);

  const sportsList = [
    "Cricket", "Football", "Badminton", "Tennis",
    "Basketball", "Swimming", "Table Tennis", "Volleyball"
  ];

  const facilitiesList = [
    "Parking", "Drinking Water", "Changing Room",
    "Washroom", "Flood Lights", "Cafeteria", "Seating Area"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSportChange = (sport) => {
    if (form.sports.includes(sport)) {
      setForm({ ...form, sports: form.sports.filter((s) => s !== sport) });
    } else {
      setForm({ ...form, sports: [...form.sports, sport] });
    }
  };

  const handleFacilityChange = (facility) => {
    if (form.facilities.includes(facility)) {
      setForm({ ...form, facilities: form.facilities.filter((f) => f !== facility) });
    } else {
      setForm({ ...form, facilities: [...form.facilities, facility] });
    }
  };

  const handleGalleryChange = (index, value) => {
    const updated = [...form.gallery];
    updated[index] = value;
    setForm({ ...form, gallery: updated });
  };

  const addGalleryUrl = () => {
    setForm({ ...form, gallery: [...form.gallery, ""] });
  };

  const removeGalleryUrl = (index) => {
    const updated = form.gallery.filter((_, i) => i !== index);
    setForm({ ...form, gallery: updated.length > 0 ? updated : [""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        gallery: form.gallery.filter(url => url.trim() !== ""),
      };

      const res = await API.put(`academies/update/${academy._id}`, payload);

      if (res.data.success) {
        alert("Academy Updated Successfully! 🎉");
        const updated = { ...academy, ...payload };
        setAcademy(updated);
        localStorage.setItem("academy", JSON.stringify(updated));
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-700">Update Academy</h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 space-y-5">

        <div>
          <label className="text-sm text-gray-600">Owner Name</label>
          <input name="name" value={form.name} onChange={handleChange}
            className="input-style" placeholder="Owner Name" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">City</label>
            <select name="city" value={form.city} onChange={handleChange} className="input-style">
              <option value="">Select City</option>
              <option>Ahmedabad</option>
              <option>Gandhinagar</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Area</label>
            <input name="area" value={form.area} onChange={handleChange}
              className="input-style" placeholder="Area" />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange}
            className="input-style" placeholder="Phone Number" />
        </div>

        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange}
            rows="3" className="input-style resize-none" placeholder="Academy Description" />
        </div>

        {/* Main Image */}
        <div>
          <label className="text-sm text-gray-600">Main Image URL</label>
          <input name="image" value={form.image} onChange={handleChange}
            className="input-style" placeholder="Paste main image link" />
          {form.image && (
            <img src={form.image} alt="Preview"
              className="mt-3 w-48 h-40 object-cover rounded-xl border border-gray-200" />
          )}
        </div>

        {/* Gallery Images */}
        <div>
          <label className="text-sm text-gray-600 font-semibold">Gallery Images</label>

          {form.gallery.map((url, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                value={url}
                onChange={(e) => handleGalleryChange(index, e.target.value)}
                className="input-style"
                placeholder={`Image URL ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeGalleryUrl(index)}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm transition"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addGalleryUrl}
            className="mt-3 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-200 transition"
          >
            + Add Image
          </button>

          {/* Gallery Preview */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {form.gallery.filter(url => url.trim() !== "").map((url, i) => (
              <img key={i} src={url} alt={`preview-${i}`}
                className="w-24 h-20 object-cover rounded-xl border border-gray-200" />
            ))}
          </div>
        </div>

        {/* Sports */}
        <div>
          <label className="text-sm text-gray-600">Sports</label>
          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            {sportsList.map((sport) => (
              <label key={sport} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.sports.includes(sport)}
                  onChange={() => handleSportChange(sport)}
                  className="accent-blue-600"
                />
                {sport}
              </label>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <label className="text-sm text-gray-600">Facilities</label>
          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            {facilitiesList.map((facility) => (
              <label key={facility} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.facilities.includes(facility)}
                  onChange={() => handleFacilityChange(facility)}
                  className="accent-blue-600"
                />
                {facility}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Academy 🚀"}
        </button>

      </form>

      <style>{`
        .input-style {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 15px;
          outline: none;
          margin-top: 4px;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </div>
  );
}

// ================= SETTINGS =================
function AcademySettings({ academy }) {
  const [form, setForm] = useState({
    email: academy?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/change-password", form);

      if (res.data.success) {
        alert("Password Changed Successfully! 🎉");
        setForm({ ...form, currentPassword: "", newPassword: "", confirmPassword: "" });
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-700">Settings</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h3 className="font-semibold text-gray-700">Change Password</h3>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input name="email" value={form.email} onChange={handleChange}
            className="input-style" placeholder="Your email" readOnly />
        </div>

        <div>
          <label className="text-sm text-gray-600">Current Password</label>
          <input type="password" name="currentPassword" value={form.currentPassword}
            onChange={handleChange} className="input-style"
            placeholder="Enter current password" required />
        </div>

        <div>
          <label className="text-sm text-gray-600">New Password</label>
          <input type="password" name="newPassword" value={form.newPassword}
            onChange={handleChange} className="input-style"
            placeholder="Enter new password" required />
        </div>

        <div>
          <label className="text-sm text-gray-600">Confirm Password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword}
            onChange={handleChange} className="input-style"
            placeholder="Confirm new password" required />
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition disabled:opacity-60">
          {loading ? "Saving..." : "Change Password 🔐"}
        </button>
      </form>

      <style>{`
        .input-style {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 15px;
          outline: none;
          margin-top: 4px;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </div>
  );
}