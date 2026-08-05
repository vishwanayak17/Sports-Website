import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Academies() {
  const navigate = useNavigate();
  const locationHook = useLocation();

  const params = new URLSearchParams(locationHook.search);
  const cityParam = params.get("city") || "";
  const sportParam = params.get("sport") || "";
  const [sportsList, setSportsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [sportValue, setSportValue] = useState(sportParam);
  const [locationValue, setLocationValue] = useState(cityParam);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sports");
        setSportsList(Array.isArray(res.data) ? res.data : res.data.data);
      } catch (err) {
        console.log("Sports error:", err);
      }
    };

    const fetchLocations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/locations");
        setLocationsList(Array.isArray(res.data) ? res.data : res.data.data);
      } catch (err) {
        console.log("Locations error:", err);
      }
    };

    fetchSports();
    fetchLocations();
  }, []);

  useEffect(() => {
    fetchAcademies(sportParam, cityParam);
  }, []);

  const fetchAcademies = async (sport, city) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/academy?sport=${sport}&city=${city}`
      );
      setFilteredData(Array.isArray(res.data) ? res.data : res.data.data);
    } catch (err) {
      console.log("Academies error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!sportValue || !locationValue) {
      alert("Please select sport and location");
      return;
    }
    fetchAcademies(sportValue, locationValue);
  };

  const cities = [...new Set(filteredData.map((a) => a.city))];

  return (
    <section className="py-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        <div className="mt-12 text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">Sports Academies Directory</h1>
          <p className="mt-4 text-gray-500">Ahmedabad & Gandhinagar Sports Academies at one place</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl px-6 py-5 w-full max-w-[720px] flex flex-col md:flex-row items-center gap-4">

            {/* Sport Dropdown */}
            <div className="relative w-full md:w-[240px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🏅</span>
              <select
                value={sportValue}
                onChange={(e) => setSportValue(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none cursor-pointer"
              >
                <option value="">Choose Sport</option>
                {/* ✅ FIX - _id nahi ho to name ya index use karo */}
                {sportsList.map((s, index) => (
                  <option key={s._id || s.name || index} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</span>
            </div>

            {/* Location Dropdown */}
            <div className="relative w-full md:w-[240px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">📍</span>
              <select
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none cursor-pointer"
              >
                <option value="">Choose Location</option>
                {/* ✅ FIX - _id nahi ho to name ya index use karo */}
                {locationsList.map((l, index) => (
                  <option key={l._id || l.name || index} value={l.name}>
                    {l.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</span>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full md:w-[160px] py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-cyan-400 to-blue-600
                hover:from-cyan-500 hover:to-blue-700
                transition shadow-lg cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-500 text-lg animate-pulse">Loading...</p>
        )}

        {!loading && filteredData.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No academies found.
          </p>
        )}

        {!loading && cities.map((cityName) => (
          <div key={cityName}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{cityName}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredData
                .filter((academy) => academy.city === cityName)
                .map((academy) => (
                  <div
                    key={academy._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    <img
                      src={academy.image}
                      alt={academy.academyName}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6 space-y-3">
                      <h3 className="font-semibold text-lg">{academy.academyName}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaMapMarkerAlt />
                        {academy.area}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FaStar className="text-yellow-400" />
                        {academy.rating} Rating
                      </div>
                      <button
                        onClick={() => navigate(`/academy/${academy._id}`)}
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