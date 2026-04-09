import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";
import axios from "axios";

function Herosection() {
  const navigate = useNavigate();

  const [sportsList, setSportsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    // ✅ Fetch Sports
    const fetchSports = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sports");
        setSportsList(Array.isArray(res.data) ? res.data : res.data.data);
      } catch (error) {
        console.log("Sports fetch error:", error);
      }
    };

    // ✅ Fetch Locations
    const fetchLocations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/locations");
        setLocationsList(Array.isArray(res.data) ? res.data : res.data.data);
      } catch (error) {
        console.log("Locations fetch error:", error);
      }
    };

    fetchSports();
    fetchLocations();
  }, []);

  const handleSearch = () => {
    if (!sport || !location) {
      alert("Please select sport and location");
      return;
    }
    navigate(`/academies?sport=${sport}&city=${location}`);
  };

  return (
    <section
      className="min-h-[95vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-6xl px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-medium text-white">
          Find the Best
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-2">
          Sports Academies
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
          Near You
        </h2>

        <p className="text-base md:text-lg text-white mt-6">
          Explore top sports academies in
        </p>
        <p className="text-base md:text-lg text-white mb-10">
          Ahmedabad & Gandhinagar
        </p>

        {/* SEARCH BOX */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl px-5 py-5 w-full max-w-[640px] flex flex-col md:flex-row items-center gap-4">

            {/* Sport Dropdown */}
            <div className="relative w-full md:w-[200px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">🏅</span>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="
                  w-full
                  pl-11 pr-10
                  py-3
                  rounded-xl
                  border
                  focus:outline-none
                  cursor-pointer
                  appearance-none
                  bg-[url('https://cdn-icons-png.flaticon.com/512/32/32195.png')]
                  bg-no-repeat
                  bg-[length:12px]
                  bg-[right_14px_center]
                "
              >
                <option value="">Choose Sport</option>
                {sportsList.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="relative w-full md:w-[210px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">📍</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="
                  w-full
                  pl-11 pr-10
                  py-3
                  rounded-xl
                  border
                  focus:outline-none
                  cursor-pointer
                  appearance-none
                  bg-[url('https://cdn-icons-png.flaticon.com/512/32/32195.png')]
                  bg-no-repeat
                  bg-[length:12px]
                  bg-[right_14px_center]
                "
              >
                <option value="">Choose Location</option>
                {locationsList.map((l) => (
                  <option key={l.id} value={l.name}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="
                w-full md:w-[140px]
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

      </div>
    </section>
  );
}

export default Herosection;