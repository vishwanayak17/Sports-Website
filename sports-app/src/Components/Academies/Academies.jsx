import React from "react";
import { FaMapMarkerAlt, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

function Academies() {
  const navigate = useNavigate();
  const locationHook = useLocation();

  const params = new URLSearchParams(locationHook.search);
  const city = params.get("city");
  const sport = params.get("sport");

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

  // Get unique cities dynamically
  const cities = [...new Set(filteredData.map((a) => a.city))];

  return (
    <section className="py-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-600 font-medium hover:underline cursor-pointer"
        >
          <FaArrowLeft />
          Back to Home
        </button>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">
            Sports Academies Directory
          </h1>
          <p className="text-gray-500">
            Ahmedabad & Gandhinagar Sports Academies at one place
          </p>
        </div>

        {/* If No Results */}
        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No academies found.
          </p>
        )}

        {/* Dynamic City Sections */}
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
                        onClick={() =>
                          navigate(`/academy/${academy.id}`)
                        }
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
