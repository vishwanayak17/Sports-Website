import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AcademyRegistrationSection = () => {
  const [formData, setFormData] = useState({
    academyName: "",
    city: "",
    area: "",
    sports: "",
    phone: "",
    email: "",
    description: "",
    imageUrl: "",
    facilities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFacilityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, value],
      });
    } else {
      setFormData({
        ...formData,
        facilities: formData.facilities.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Academy Registration Submitted Successfully!");
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
            <input
              type="text"
              name="academyName"
              placeholder="Academy Name"
              required
              onChange={handleChange}
              className="input-style"
            />

            {/* City & Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="city"
                required
                onChange={handleChange}
                className="input-style"
              >
                <option value="">Select City</option>
                <option>Ahmedabad</option>
                <option>Gandhinagar</option>
              </select>

              <input
                type="text"
                name="area"
                placeholder="Area / Location"
                required
                onChange={handleChange}
                className="input-style"
              />
            </div>

            {/* Sports */}
            <select
              name="sports"
              required
              onChange={handleChange}
              className="input-style"
            >
              <option value="">Select Sport Type</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
              <option>Basketball</option>
              <option>Multi Sports</option>
            </select>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="input-style"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="input-style"
              />
            </div>

            {/* Description */}
            <textarea
              name="description"
              rows="4"
              placeholder="Academy Description..."
              required
              onChange={handleChange}
              className="input-style resize-none"
            ></textarea>

            {/* Image URL */}
            <input
              type="url"
              name="imageUrl"
              placeholder="Academy Image URL"
              required
              onChange={handleChange}
              className="input-style"
            />

            {/* Facilities */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Facilities:
              </label>
              <div className="grid grid-cols-2 gap-3 text-gray-600">
                {[
                  "Parking",
                  "Changing Room",
                  "Flood Lights",
                  "Washroom",
                  "Drinking Water",
                  "Cafeteria",
                ].map((facility) => (
                  <label key={facility} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={facility}
                      onChange={handleFacilityChange}
                      className="accent-blue-600"
                    />
                    <span>{facility}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="flex justify-center pt-4">
              <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition duration-300"
            >
              Register Academy 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Tailwind Common Input Style */}
      <style>
        {`
          .input-style {
            width: 100%;
            border: 1px solid #d1d5db;
            border-radius: 12px;
            padding: 14px 18px;
            font-size: 16px;
            outline: none;
          }
          .input-style:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
          }
        `}
      </style>
    </section>
  );
};

export default AcademyRegistrationSection;
