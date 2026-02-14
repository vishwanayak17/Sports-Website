import { useState } from "react";

const Signup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    academyName: "",
    city: "",
    area: "",
    sport: [],
    phone: "",
    email: "",
    description: "",
    image: "",
    facilities: []
  });

  if (!isOpen) return null;

  const sportsList = [
    "Cricket",
    "Football",
    "Badminton",
    "Tennis",
    "Basketball",
    "Swimming",
    "Table Tennis",
    "Volleyball"
  ];

  const facilitiesList = [
    "Parking",
    "Drinking Water",
    "Changing Room",
    "Washroom",
    "Flood Lights",
    "Seating Area"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ MULTIPLE SPORTS SELECT
  const handleSportChange = (sport) => {
    if (form.sport.includes(sport)) {
      setForm({
        ...form,
        sport: form.sport.filter((s) => s !== sport),
      });
    } else {
      setForm({
        ...form,
        sport: [...form.sport, sport],
      });
    }
  };

  const handleFacilityChange = (facility) => {
    if (form.facilities.includes(facility)) {
      setForm({
        ...form,
        facilities: form.facilities.filter((f) => f !== facility),
      });
    } else {
      setForm({
        ...form,
        facilities: [...form.facilities, facility],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Academy Registered Successfully 🎉");
    console.log(form);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/20">

      <div className="relative w-[90%] max-w-[520px] max-h-[90vh] overflow-y-auto p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-white/40 animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-1 text-gray-800">
          Academy Signup
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Register your academy to get students
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Academy Name */}
          <div>
            <label className="text-sm text-gray-600">Academy Name</label>
            <input
              name="academyName"
              placeholder="Enter academy name"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* City (RADIO BUTTON) + Area */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">City</label>
              <div className="mt-2 flex flex-col gap-1 text-sm">
                {["Ahmedabad", "Gandhinagar"].map((city, i) => (
                  <label key={i} className="flex items-center gap-2">
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
                className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* SPORT (CHECKBOX MULTI SELECT) */}
          <div>
            <label className="text-sm text-gray-600">Sport Type</label>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {sportsList.map((sport, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => handleSportChange(sport)}
                  />
                  {sport}
                </label>
              ))}
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              rows="2"
              placeholder="Write short description"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={handleChange}
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-gray-600">Academy Image URL</label>
            <input
              name="image"
              placeholder="Paste image link"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={handleChange}
            />
          </div>

          {/* Facilities */}
          <div>
            <label className="text-sm text-gray-600">Facilities</label>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {facilitiesList.map((f, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => handleFacilityChange(f)}
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg"
          >
            Register Academy
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;
