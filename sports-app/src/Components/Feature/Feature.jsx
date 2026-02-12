import React from "react";
import { Link } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData"; // full data file

function Feature() {
  // Get first 3 academies from full data
  const featuredAcademies = academiesFullData.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      {/* Heading with View All */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Sports Academies
          </h2>
          <p className="text-gray-600 mt-2">
            Top academies from Ahmedabad & Gandhinagar
          </p>
        </div>
        <Link
          to="/academis"
          className="text-cyan-600 font-medium hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredAcademies.map((academy) => (
          <div
            key={academy.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            {/* Image */}
            <img
              src={academy.image}
              alt={academy.name}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {academy.name}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                ⭐ {academy.rating} Rating
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
