import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Feature() {
  const navigate = useNavigate();
  const [featuredAcademies, setFeaturedAcademies] = useState([]);

  useEffect(() => {
    const fetchAcademies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/academy");
        const data = Array.isArray(res.data) ? res.data : res.data.data;

        // ✅ Unique academies - same name wali duplicate hata do
        const unique = data.filter(
          (academy, index, self) =>
            index === self.findIndex((a) => a.academyName === academy.academyName)
        );

        // ✅ Rating high to low sort
        const sorted = unique.sort((a, b) => b.rating - a.rating);
        setFeaturedAcademies(sorted.slice(0, 6));
      } catch (err) {
        console.log("Feature fetch error:", err);
      }
    };
    fetchAcademies();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Popular Sports Academies
        </h2>
        <p className="text-gray-600 mt-2">
          Top academies from Ahmedabad & Gandhinagar
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredAcademies.map((academy) => (
          <div
            key={academy._id}
            onClick={() => navigate(`/academy/${academy._id}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={academy.image}
              alt={academy.academyName}
              className="h-52 w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {academy.academyName}
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