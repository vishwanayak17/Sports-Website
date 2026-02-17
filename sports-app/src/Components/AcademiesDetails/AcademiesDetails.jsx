import React from "react";
import { useParams } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

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
  const { id } = useParams();

  // 🔥 find academy by id
  const academy = academiesFullData.find((a) => a.id === id);

  // safety check
  if (!academy) {
    return <div className="p-10 text-center">Academy not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Back */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-indigo-600 font-medium mb-6"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-3">{academy.name}</h1>

          <p className="text-indigo-600 font-semibold mb-2">
            {academy.sports.join(", ")}
          </p>

          <div className="flex items-center gap-2 text-yellow-500 mb-4">
            <FaStar />
            {academy.rating} Rating
          </div>

          <p className="text-gray-600 mb-6">{academy.description}</p>

          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-3">
              <FaUsers className="text-indigo-500" />
              {academy.achievements.students} Students
            </div>

            <div className="flex items-center gap-3">
              <FaRunning className="text-green-500" />
              {academy.achievements.experience}
            </div>

            <div className="flex items-center gap-3">
              <FaTrophy className="text-yellow-500" />
              {academy.achievements.players} Players
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              {academy.address}
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500" />
              {academy.timing}
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Academy</h2>
            <p className="text-gray-600 mb-6">
              For admission or enquiry contact directly.
            </p>
          </div>

          <div className="flex gap-4">

            <a
              href={`tel:${academy.phone}`}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-xl w-full"
            >
              <FaPhoneAlt />
              Call
            </a>

            <a
              href={`https://wa.me/${academy.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-xl w-full"
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
