import { useState } from "react";
import API from "../../api/axios";

const Signup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    academyName: "",
    name: "",
    password: "",
    city: "",
    area: "",
    sports: [],   // ✅ fixed
    phone: "",
    email: "",
    description: "",
    image: "",
    facilities: []
  });

  if (!isOpen) return null;

  const sportsList = [
    "Cricket","Football","Badminton","Tennis",
    "Basketball","Swimming","Table Tennis","Volleyball","Martial Arts","Skating"
  ];

  const facilitiesList = [
    "Parking","Drinking Water","Changing Room",
    "Washroom","Seating Area"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSportChange = (sport) => {
    if (form.sports.includes(sport)) {
      setForm({
        ...form,
        sports: form.sports.filter((s) => s !== sport),
      });
    } else {
      setForm({
        ...form,
        sports: [...form.sports, sport],
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (form.sports.length === 0) {
      alert("Please select at least one sport");
      return;
    }

    try {
      const res = await API.post("academies/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        academyName: form.academyName,
        city: form.city,
        area: form.area,
        sports: form.sports, // ✅ fixed
        phone: form.phone,
        description: form.description,
        image: form.image || "https://via.placeholder.com/300", // ✅ default image
        facilities: form.facilities,
      });

      if (res.data.success) {
        alert("Academy Registered Successfully 🎉");

        // ✅ save to localStorage (auto dashboard login feel)
        localStorage.setItem("academy", JSON.stringify(res.data.data));

        onClose();
      }

    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/20">

      <div className="relative w-[90%] max-w-[520px] max-h-[90vh] overflow-y-auto p-8 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-white/40">

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
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl"
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
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl"
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
              placeholder="Enter password"
              className="w-full mt-1 border border-gray-300 p-3 rounded-xl"
              onChange={handleChange}
              required
            />
          </div>

          {/* City + Area */}
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
              <label className="text-sm text-gray-600">Area</label>
              <input
                name="area"
                placeholder="Enter area"
                className="w-full mt-1 border border-gray-300 p-3 rounded-xl"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Sports */}
          <div>
            <label className="text-sm text-gray-600">Sport Type</label>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {sportsList.map((sport, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.sports.includes(sport)} // ✅ fix
                    onChange={() => handleSportChange(sport)}
                  />
                  {sport}
                </label>
              ))}
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border p-3 rounded-xl"
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          />

          {/* Image */}
          <input
            name="image"
            placeholder="Image URL"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          />

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
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Register Academy 🚀
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;