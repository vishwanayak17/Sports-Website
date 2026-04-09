import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const sportConfig = {
  Cricket:      { icon: "🏏", color: "from-green-400 to-emerald-600" },
  Football:     { icon: "⚽", color: "from-yellow-400 to-orange-500" },
  Badminton:    { icon: "🏸", color: "from-purple-400 to-pink-500" },
  Tennis:       { icon: "🎾", color: "from-lime-400 to-green-500" },
  Basketball:   { icon: "🏀", color: "from-orange-400 to-red-500" },
  Swimming:     { icon: "🏊‍♂️", color: "from-cyan-400 to-blue-500" },
  Hockey:       { icon: "🏑", color: "from-indigo-400 to-blue-600" },
  Volleyball:   { icon: "🏐", color: "from-rose-400 to-pink-600" },
  "Table Tennis": { icon: "🏓", color: "from-teal-400 to-cyan-600" },
  Skating:      { icon: "⛸️", color: "from-sky-400 to-indigo-500" },
  "Martial Arts": { icon: "🥋", color: "from-gray-700 to-gray-900" },
};

function Game() {
  const [index, setIndex] = useState(0);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  // ✅ DB se sports fetch karo
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/sports");
        const data = Array.isArray(res.data) ? res.data : res.data.data;

        // DB ke sports ko icon aur color ke saath match karo
        const mapped = data.map((s) => ({
          name: s.name,
          icon: sportConfig[s.name]?.icon || "🏅",
          color: sportConfig[s.name]?.color || "from-gray-400 to-gray-600",
        }));

        setGames(mapped);
      } catch (err) {
        console.log("Sports fetch error:", err);
      }
    };
    fetchSports();
  }, []);

  useEffect(() => {
    if (games.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % games.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [games]);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Sports Categories
        </h2>
        <p className="text-gray-600 mt-3">
          Choose your sport & find the best academy
        </p>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden px-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
          }}
        >
          {games.map((game, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
            >
              <div
                onClick={() => navigate(`/academies?sport=${game.name}`)}
                className={`
                  h-[240px] rounded-3xl
                  bg-gradient-to-br ${game.color}
                  flex flex-col items-center justify-center
                  text-white shadow-xl
                  hover:scale-105 transition cursor-pointer
                `}
              >
                <span className="text-6xl mb-5">{game.icon}</span>
                <h3 className="text-2xl font-semibold tracking-wide">
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