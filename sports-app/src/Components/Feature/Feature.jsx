import React from "react";
import { useNavigate } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

function Feature() {
  const navigate = useNavigate();

  // 🔥 first 6 academies
  const featuredAcademies = academiesFullData.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Popular Sports Academies
        </h2>
        <p className="text-gray-600 mt-2">
          Top academies from Ahmedabad & Gandhinagar
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredAcademies.map((academy) => (
          <div
            key={academy.id}
            onClick={() => navigate(`/academy/${academy.id}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            {/* Image */}
            <img
              src={academy.image}
              alt={academy.name}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {academy.name}
              </h3>

              <p className="text-sm text-gray-600">
                ⭐ {academy.rating} Rating
              </p>

              <p className="text-xs text-gray-500">
                {academy.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
