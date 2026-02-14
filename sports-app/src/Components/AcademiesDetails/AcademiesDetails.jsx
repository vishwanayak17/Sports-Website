import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaRunning,
  FaTrophy,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";

const AcademyDetails = () => {
  // 🔹 Example academy data (tum API ya props se bhi le sakti ho)
  const academy = {
    name: "Vishwa Sports Academy",
    sport: "Cricket & Football Training",
    rating: 4.8,
    students: 120,
    experience: "5+ Years",
    achievements: "State Level Champions",
    address: "SG Highway, Ahmedabad",
    time: "Morning & Evening Batches",
    phone: "+919876543210",
    description:
      "Professional coaching with certified trainers. Best infrastructure and ground facilities available.",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* 🔙 Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-indigo-600 font-medium mb-6 hover:underline"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">

        {/* ================= LEFT SECTION ================= */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {academy.name}
          </h1>

          <p className="text-indigo-600 font-semibold mb-2">
            {academy.sport}
          </p>

          <div className="flex items-center gap-2 text-yellow-500 mb-4">
            <FaStar />
            <span className="font-medium">{academy.rating} Rating</span>
          </div>

          <p className="text-gray-600 mb-6">{academy.description}</p>

          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-3">
              <FaUsers className="text-indigo-500" />
              {academy.students} Students
            </div>

            <div className="flex items-center gap-3">
              <FaRunning className="text-green-500" />
              {academy.experience}
            </div>

            <div className="flex items-center gap-3">
              <FaTrophy className="text-yellow-500" />
              {academy.achievements}
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              {academy.address}
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500" />
              {academy.time}
            </div>

          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Academy
            </h2>

            <p className="text-gray-600 mb-6">
              For admission or enquiry, contact directly using call or WhatsApp.
            </p>
          </div>

          {/* 📞 + 💬 BUTTONS */}
          <div className="flex gap-4">

            {/* CALL */}
            <a
              href={`tel:${academy.phone}`}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl shadow-md transition w-full"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${academy.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl shadow-md transition w-full"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AcademyDetails;
