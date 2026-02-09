import React, { useEffect, useState } from "react";

const games = [
  {
    name: "Cricket",
    icon: "🏏",
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Football",
    icon: "⚽",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Badminton",
    icon: "🏸",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Tennis",
    icon: "🎾",
    color: "from-lime-400 to-green-500",
  },
  {
    name: "Basketball",
    icon: "🏀",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Swimming",
    icon: "🏊‍♂️",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Hockey",
    icon: "🏑",
    color: "from-indigo-400 to-blue-600",
  },
  {
    name: "Volleyball",
    icon: "🏐",
    color: "from-rose-400 to-pink-600",
  },
  {
    name: "Table Tennis",
    icon: "🏓",
    color: "from-teal-400 to-cyan-600",
  },
  {
    name: "Skating",
    icon: "⛸️",
    color: "from-sky-400 to-indigo-500",
  },
  {
    name: "Martial Arts",
    icon: "🥋",
    color: "from-gray-700 to-gray-900",
  },
  { name: "Cricket", icon: "🏏", color: "from-green-400 to-emerald-600" },
  { name: "Football", icon: "⚽", color: "from-yellow-400 to-orange-500" },
  { name: "Badminton", icon: "🏸", color: "from-purple-400 to-pink-500" },
  { name: "Tennis", icon: "🎾", color: "from-lime-400 to-green-500" },
  { name: "Basketball", icon: "🏀", color: "from-orange-400 to-red-500" },
  { name: "Swimming", icon: "🏊‍♂️", color: "from-cyan-400 to-blue-500" },
  { name: "Hockey", icon: "🏑", color: "from-indigo-400 to-blue-600" },
  { name: "Volleyball", icon: "🏐", color: "from-rose-400 to-pink-600" },
  { name: "Table Tennis", icon: "🏓", color: "from-teal-400 to-cyan-600" },
  { name: "Skating", icon: "⛸️", color: "from-sky-400 to-indigo-500" },
  { name: "Martial Arts", icon: "🥋", color: "from-gray-700 to-gray-900" },
];

function Game() {
  const [index, setIndex] = useState(0);

  // auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % games.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Sports Categories
        </h2>
        <p className="text-gray-600 mt-3">
          Choose your sport & find the best academy
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 300}px)`,
          }}
        >
          {games.map((game, i) => (
            <div
              key={i}
              className="
                w-full
                sm:w-1/2
                lg:w-1/3
                px-4
                flex-shrink-0
              "
            >
              <div
                className={`
                  h-[240px]
                  rounded-3xl
                  bg-gradient-to-br ${game.color}
                  flex flex-col items-center justify-center
                  text-white
                  shadow-xl
                  hover:scale-105
                  transition
                  cursor-pointer
                `}
              >
                <span className="text-6xl mb-4">{game.icon}</span>
                <h3 className="text-xl font-semibold tracking-wide">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Game;
