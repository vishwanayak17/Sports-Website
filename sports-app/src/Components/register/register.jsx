import { useState } from "react";
import API from "../../api/axios";

const Register = () => {
  const [form, setForm] = useState({
    academyName: "",
    name: "",
    password: "",
    city: "",
    area: "",
    sport: [],
    phone: "",
    email: "",
    description: "",
    image: "",
    facilities: [],
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
    if (form.sport.includes(sport)) {
      setForm({ ...form, sport: form.sport.filter((s) => s !== sport) });
    } else {
      setForm({ ...form, sport: [...form.sport, sport] });
    }
  };

  const handleFacilityChange = (facility) => {
    if (form.facilities.includes(facility)) {
      setForm({ ...form, facilities: form.facilities.filter((f) => f !== facility) });
    } else {
      setForm({ ...form, facilities: [...form.facilities, facility] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("academies/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        academyName: form.academyName,
        city: form.city,
        area: form.area,
        sport: form.sport,
        phone: form.phone,
        description: form.description,
        image: form.image,
        facilities: form.facilities,
      });

      if (res.data.success) {
        alert("Academy Registered Successfully! 🎉");
      }

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 lg:p-14 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Register Your Sports Academy 🏆
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Connect your academy with players across Ahmedabad & Gandhinagar.
            Grow your academy digitally.
          </p>
          <ul className="space-y-3 text-lg">
            <li>✅ Verified Listing</li>
            <li>✅ Increase Admissions</li>
            <li>✅ Online Visibility</li>
            <li>✅ Trusted Sports Network</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Academy Registration Form
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Academy Name */}
            <div>
              <label className="text-sm text-gray-600">Academy Name</label>
              <input
                name="academyName"
                placeholder="Enter academy name"
                className="input-style"
                onChange={handleChange}
                required
              />
            </div>

            {/* Owner Name */}
            <div>
              <label className="text-sm text-gray-600">Owner Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                className="input-style"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                className="input-style"
                onChange={handleChange}
                required
              />
            </div>

            {/* City & Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">City</label>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  {["Ahmedabad", "Gandhinagar"].map((city) => (
                    <label key={city} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="city"
                        value={city}
                        onChange={handleChange}
                        required
                      />
                      {city}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Area / Location</label>
                <input
                  name="area"
                  placeholder="Enter area"
                  className="input-style"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Sports */}
            <div>
              <label className="text-sm text-gray-600">Sport Type</label>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                {sportsList.map((sport) => (
                  <label key={sport} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleSportChange(sport)}
                    />
                    {sport}
                  </label>
                ))}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="input-style"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input-style"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-600">Academy Description</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Write short description"
                className="input-style resize-none"
                onChange={handleChange}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="text-sm text-gray-600">Academy Image URL</label>
              <input
                name="image"
                placeholder="Paste image link"
                className="input-style"
                onChange={handleChange}
              />
            </div>

            {/* Facilities */}
            <div>
              <label className="text-sm text-gray-600 font-semibold">Facilities</label>
              <div className="grid grid-cols-2 gap-3 mt-2 text-gray-600">
                {facilitiesList.map((facility) => (
                  <label key={facility} className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      value={facility}
                      onChange={() => handleFacilityChange(facility)}
                      className="accent-blue-600"
                    />
                    <span>{facility}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition duration-300 disabled:opacity-60"
            >
              {loading ? "Registering..." : "Register Academy 🚀"}
            </button>

          </form>
        </div>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 16px;
          outline: none;
          margin-top: 4px;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Register;