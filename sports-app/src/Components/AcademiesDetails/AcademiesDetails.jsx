import React, { useState, useEffect } from "react";
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
  FaWhatsapp,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AcademiesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [academy, setAcademy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAcademy = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/academy/single/${id}`
        );
        setAcademy(res.data);
      } catch (err) {
        console.log("Error fetching academy:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademy();
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-20 text-xl font-semibold animate-pulse">
        Loading...
      </div>
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

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          <div className="mt-14 bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h1 className="text-3xl font-bold text-gray-800">
              {academy.academyName}
            </h1>
            <p className="text-gray-500 mt-2">{academy.description}</p>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">{academy.rating} Rating</span>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="shadow-md rounded-xl p-4 text-center bg-white">
              <FaTrophy className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements?.players || "N/A"}
              </p>
              <p className="text-sm text-gray-500">State Level Players</p>
            </div>

            <div className="shadow-md rounded-xl p-4 text-center bg-white">
              <FaUsers className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements?.students || "N/A"}
              </p>
              <p className="text-sm text-gray-500">Students Trained</p>
            </div>

            <div className="shadow-md rounded-xl p-4 text-center bg-white">
              <FaRunning className="mx-auto text-cyan-600 mb-2" />
              <p className="font-semibold">
                {academy.achievements?.experience || "N/A"}
              </p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="bg-white shadow-md rounded-2xl p-6 space-y-5">

            <div className="grid md:grid-cols-3 gap-4">
              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm">
                <FaPhoneAlt className="text-cyan-600" />
                {academy.phone}
              </div>

              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm">
                <FaEnvelope className="text-cyan-600" />
                {academy.email}
              </div>

              <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm">
                <FaClock className="text-cyan-600" />
                {academy.timing || "N/A"}
              </div>
            </div>

            <div className="shadow-md rounded-xl p-3 flex gap-2 items-center text-sm">
              <FaMapMarkerAlt className="text-cyan-600" />
              {academy.address || academy.area + ", " + academy.city}
            </div>

            {/* SPORTS */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Sports Offered</h2>
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(academy.sports)
                  ? academy.sports
                  : [academy.sports]
                ).map((sport, i) => (
                  <span key={i} className="px-3 py-1 shadow-md rounded-full text-sm">
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Facilities</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                {academy.facilities?.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>

            <div className="shadow-md rounded-xl p-3 text-sm">
              <h2 className="font-semibold mb-1">Who Can Join?</h2>
              Boys & Girls | Age: 8 – 25 Years
            </div>
          </div>

          {/* GALLERY */}
          <div className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold mb-3">Training Moments</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {academy.gallery?.map((img, i) => (
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

        {/* RIGHT SECTION */}
        <div>
          <div className="sticky top-30 bg-white shadow-xl rounded-2xl p-6 space-y-4">

            <h3 className="font-semibold text-lg">Contact Academy</h3>

            {/* CALL BUTTON */}
            <a
              href={`tel:${academy.phone}`}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg"
            >
              <FaPhoneAlt />
              Call
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/91${academy.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* MAP */}
            <iframe
              className="w-full h-40 rounded-xl border"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                academy.address || academy.area + " " + academy.city
              )}&output=embed`}
              title="map"
            ></iframe>

            {/* SHARE */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: academy.academyName,
                    text: `Check out ${academy.academyName}`,
                    url: window.location.href,
                  });
                } else {
                  alert("Not supported");
                }
              }}
              className="w-full py-2 shadow-md rounded-lg"
            >
              <FaShareAlt /> Share
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademiesDetails;