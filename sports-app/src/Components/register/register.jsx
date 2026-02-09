import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AcademyRegistrationSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Academy Registration Submitted!");
  };

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex flex-col justify-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register Your Sports Academy 🏏
          </h2>

          <p className="text-lg mb-8 text-blue-100 leading-relaxed">
            List your academy and connect with players from Ahmedabad &
            Gandhinagar.
          </p>

          <ul className="space-y-4 text-lg">
            <li>✅ Verified Academy Listing</li>
            <li>✅ Reach More Players</li>
            <li>✅ Free Registration</li>
            <li>✅ Trusted Sports Platform</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 md:p-14">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Academy Owner Registration
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Academy Name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Owner Name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-500"
            />

            <select
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg text-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              <option>Ahmedabad</option>
              <option>Gandhinagar</option>
            </select>

            <select
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg text-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sport Type</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
              <option>Basketball</option>
              <option>Multi Sports</option>
            </select>

            {/* GOOGLE CAPTCHA */}
            <div className="flex justify-center pt-3">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition duration-300"
            >
              Register Academy 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AcademyRegistrationSection;
