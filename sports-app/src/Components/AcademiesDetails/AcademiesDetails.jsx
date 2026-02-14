import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaShareAlt,
  FaUsers,
  FaRunning,
  FaTrophy,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

function AcademiesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

const academy = academiesFullData.find(
  (item) => item.id === id
);



  if (!academy)
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Academy Not Found
      </div>
    );

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT SECTION ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/academis")}
            className="flex items-center gap-2 text-gray-700 font-medium mb-4 hover:text-blue-600"
          >
            <FaArrowLeft /> Back to Academies
          </button>

          {/* HERO / INTRO */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h1 className="text-3xl font-bold text-gray-800">
              {academy.name}
            </h1>
            <p className="text-gray-500 mt-2">
              {academy.description}
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">
                {academy.rating} Rating
              </span>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="shadow-md rounded-xl p-4 text-center bg-white hover:shadow-xl transition">
              <FaTrophy className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements.players}
              </p>
              <p className="text-sm text-gray-500">
                State Level Players
              </p>
            </div>

            <div className="shadow-md rounded-xl p-4 text-center bg-white hover:shadow-xl transition">
              <FaUsers className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements.students}
              </p>
              <p className="text-sm text-gray-500">
                Students Trained
              </p>
            </div>

            <div className="shadow-md rounded-xl p-4 text-center bg-white hover:shadow-xl transition">
              <FaRunning className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements.experience}
              </p>
              <p className="text-sm text-gray-500">
                Years Experience
              </p>
            </div>
          </div>

          {/* DETAILS CARD */}
          <div className="bg-white shadow-md rounded-2xl p-6 space-y-5 hover:shadow-xl transition">

            {/* CONTACT INFO */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm bg-white hover:shadow-lg transition">
                <FaPhoneAlt className="text-cyan-600" />
                {academy.phone}
              </div>

              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm bg-white hover:shadow-lg transition">
                <FaEnvelope className="text-cyan-600" />
                {academy.email}
              </div>

              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm bg-white hover:shadow-lg transition">
                <FaClock className="text-cyan-600" />
                {academy.timing}
              </div>
            </div>

            {/* ADDRESS */}
            <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm bg-white hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-cyan-600" />
              {academy.address}
            </div>

            {/* SPORTS OFFERED */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Sports Offered
              </h2>
              <div className="flex flex-wrap gap-2">
                {academy.sports.map((sport, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 shadow-md rounded-full text-sm bg-white hover:shadow-lg transition"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Facilities
              </h2>
              <ul className="text-sm text-gray-600 space-y-1">
                {academy.facilities.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>

            {/* WHO CAN JOIN */}
            <div className="shadow-md rounded-xl p-3 text-sm bg-white hover:shadow-lg transition">
              <h2 className="font-semibold mb-1">
                Who Can Join?
              </h2>
              Boys & Girls | Age: 8 – 25 Years | Beginner to Advanced
            </div>
          </div>

          {/* GALLERY */}
          <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition">
            <h2 className="text-lg font-semibold mb-3">
              Training Moments
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {academy.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="gallery"
                  className="rounded-xl w-full h-32 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div>
          <div className="sticky top-20 bg-white shadow-xl rounded-2xl p-6 space-y-4">

            <h3 className="font-semibold text-lg text-gray-800">
              Contact Academy
            </h3>

            <a
              href={`tel:${academy.phone}`}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href={`sms:${academy.phone}`}
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
            >
              <FaEnvelope />
              Send SMS
            </a>

            <iframe
              className="w-full h-40 rounded-xl border"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                academy.address
              )}&output=embed`}
              title="Academy Map"
            ></iframe>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: academy.name,
                    text: `Check out ${academy.name} on our Sports Portal`,
                    url: window.location.href,
                  });
                } else {
                  alert("Sharing not supported on this browser");
                }
              }}
              className="flex items-center justify-center gap-2 w-full py-2 shadow-md rounded-lg hover:bg-gray-100 transition"
            >
              <FaShareAlt />
              Share Academy
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademiesDetails;
