import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

function Academies() {
  const navigate = useNavigate();
  const locationHook = useLocation();

  const params = new URLSearchParams(locationHook.search);
  const city = params.get("city");
  const sport = params.get("sport");

  const [sportValue, setSportValue] = useState(sport || "");
  const [locationValue, setLocationValue] = useState(city || "");

  let filteredData = academiesFullData;

  // Filter by City
  if (city) {
    filteredData = filteredData.filter(
      (a) => a.city.toLowerCase() === city.toLowerCase()
    );
  }

  // Filter by Sport
  if (sport) {
    filteredData = filteredData.filter(
      (a) => a.sports.includes(sport)
    );
  }

  // unique cities
  const cities = [...new Set(filteredData.map((a) => a.city))];

  // 🔍 Search Function
  const handleSearch = () => {
    navigate(`/academies?city=${locationValue}&sport=${sportValue}`);
  };

  return (
    <section className="py-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-10 flex items-center gap-2 text-cyan-600 font-medium hover:underline cursor-pointer"
        >
          <FaArrowLeft />
          Back to Home
        </button>

        {/* 🔥 Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">
            Sports Academies Directory
          </h1>
          <p className="text-gray-500">
            Ahmedabad & Gandhinagar Sports Academies at one place
          </p>
        </div>

       {/* ✅ SEARCH BOX */}
<div className="flex justify-center">
  <div className="bg-white rounded-2xl shadow-xl px-6 py-5 w-full max-w-[720px] flex flex-col md:flex-row items-center gap-4">

    {/* 🏅 Sport Input Style Dropdown */}
    <div className="relative w-full md:w-[240px]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        🏅
      </span>

      <select
        value={sportValue}
        onChange={(e) => setSportValue(e.target.value)}
        className="
          w-full
          pl-12 pr-10
          py-3
          rounded-xl
          border border-gray-300
          bg-white
          text-gray-700
          focus:outline-none
          focus:ring-2 focus:ring-cyan-400
          appearance-none
          cursor-pointer
        "
      >
        <option value="">Choose Sport</option>
        <option value="Cricket">Cricket</option>
        <option value="Football">Football</option>
        <option value="Badminton">Badminton</option>
        <option value="Swimming">Swimming</option>
        <option value="Hockey">Hockey</option>
        <option value="Tennis">Tennis</option>
        <option value="Skating">Skating</option>
        <option value="Basketball">Basketball</option>
        <option value="Volleyball">Volleyball</option>
        <option value="Martial Arts">Martial Arts</option>
      </select>

      {/* custom dropdown arrow */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
        ▼
      </span>
    </div>

    {/* 📍 Location Input Style Dropdown */}
    <div className="relative w-full md:w-[240px]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        📍
      </span>

      <select
        value={locationValue}
        onChange={(e) => setLocationValue(e.target.value)}
        className="
          w-full
          pl-12 pr-10
          py-3
          rounded-xl
          border border-gray-300
          bg-white
          text-gray-700
          focus:outline-none
          focus:ring-2 focus:ring-cyan-400
          appearance-none
          cursor-pointer
        "
      >
        <option value="">Choose Location</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Gandhinagar">Gandhinagar</option>
      </select>

      {/* custom dropdown arrow */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
        ▼
      </span>
    </div>

    {/* 🔍 Search Button */}
    <button
      onClick={handleSearch}
      className="
        w-full md:w-[160px]
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r from-cyan-400 to-blue-600
        hover:from-cyan-500 hover:to-blue-700
        transition
        shadow-lg
        cursor-pointer
      "
    >
      Search
    </button>

  </div>
</div>


        {/* ❌ No Data */}
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No academies found.
          </p>
        )}

        {/* 🏙️ City Sections */}
        {cities.map((cityName) => (
          <div key={cityName}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {cityName}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {filteredData
                .filter((academy) => academy.city === cityName)
                .map((academy) => (
                  <div
                    key={academy.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    <img
                      src={academy.image}
                      alt={academy.name}
                      className="h-48 w-full object-cover"
                    />

                    <div className="p-6 space-y-3">
                      <h3 className="font-semibold text-lg">
                        {academy.name}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt />
                        {academy.area}
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <FaStar className="text-yellow-400" />
                        {academy.rating} Rating
                      </div>

                      <button
                        onClick={() => navigate(`/academy/${academy.id}`)}
                        className="mt-3 text-white w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition cursor-pointer"
                      >
                        View More →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Academies;
