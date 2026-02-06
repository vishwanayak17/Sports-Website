import React from "react";

const academies = [
  {
    id: 1,
    name: "Sardar Patel Sports Complex",
    location: "Navrangpura, Ahmedabad",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
  },
  {
    id: 2,
    name: "Karnavati Sports Academy",
    location: "SG Highway, Ahmedabad",
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },
  {
    id: 3,
    name: "Sports Authority of Gujarat",
    location: "Sector 15, Gandhinagar",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
  },
  {
    id: 4,
    name: "GSSTC Gandhinagar",
    location: "Sector 21, Gandhinagar",
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  },
];

function Feature() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Sports Academies
        </h2>
        <p className="text-gray-600 mt-3">
          Top academies from Ahmedabad & Gandhinagar
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {academies.map((academy) => (
          <div
            key={academy.id}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              transition
            "
          >
            {/* Image */}
            <img
              src={academy.image}
              alt={academy.name}
              className="h-52 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {academy.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                📍 {academy.location}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                ⭐ {academy.rating} Rating
              </p>

              <button
                className="
                  mt-5 w-full
                  px-4 py-2.5
                  rounded-xl
                  font-medium
                  text-white
                  bg-gradient-to-r from-cyan-400 to-blue-600
                  hover:from-cyan-500 hover:to-blue-700
                  transition
                "
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
