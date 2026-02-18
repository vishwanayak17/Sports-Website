<<<<<<< HEAD
import React from "react";
import heroBg from "../../assets/hero-bg.png"; // ← apni image ka path yahin rakho

function Herosection() {
  return (
    <div
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";

function Herosection() {
  const navigate = useNavigate();

  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (!sport || !location) {
      alert("Please select sport and location");
      return;
    }

    navigate(`/academis?sport=${sport}&city=${location}`);
  };

  return (
    <section
>>>>>>> 0045eed090aedee2d9b96ef7652ecb9b7691f254
      className="min-h-[95vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
<<<<<<< HEAD
      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-medium text-white">
          Find the Best
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-2">
          Sports Academies
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          Near You
        </h2>

        <p className="text-lg md:text-xl text-white mt-5">
          Explore top sports academies
        </p>

        <p className="text-lg md:text-xl text-white mb-10">
          in Ahmedabad & Gandhinagar
        </p>
{/* SEARCH BOX */}
<div className="mt-10 flex justify-center">
  <div
    className="
      bg-white rounded-2xl shadow-xl
      px-5 py-5
      w-full max-w-[590px]
      flex flex-col md:flex-row
      gap-4 items-center
    "
  >
    {/* Sport select */}
    <div className="relative w-full md:w-[200px]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        🏅
      </span>
      <select
        className="
          w-full pl-11 pr-8 py-3
          rounded-xl border
          focus:outline-none
          appearance-none
          bg-[url('https://cdn-icons-png.flaticon.com/512/32/32195.png')]
          bg-no-repeat bg-[length:12px]
          bg-[right_12px_center]
        "
      >
        <option>Choose Sport</option>
        <option>Cricket</option>
        <option>Football</option>
        <option>Badminton</option>
        <option>Swimming</option>
        <option>Hockey</option>
        <option>Martial Arts</option>
      </select>
    </div>

    {/* Location select */}
    <div className="relative w-full md:w-[200px]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        📍
      </span>
      <select
        className="
          w-full pl-11 pr-8 py-3
          rounded-xl border
          focus:outline-none
          appearance-none
          bg-[url('https://cdn-icons-png.flaticon.com/512/32/32195.png')]
          bg-no-repeat bg-[length:12px]
          bg-[right_12px_center]
        "
      >
        <option>Choose Location</option>
        <option>Ahmedabad</option>
        <option>Gandhinagar</option>
      </select>
    </div>

    {/* Button */}
   <button
  className="
    px-10 py-3
    rounded-lg
    font-semibold
    text-white
    bg-gradient-to-r from-cyan-400 to-blue-600
    hover:from-cyan-500 hover:to-blue-700
    transition
    shadow-lg
  "
>
  Search
</button>

  </div>
</div>

      </div>
    </div>
=======
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
              
              {/* Left Icon */}
              <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                🏅
              </span>

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
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Badminton">Badminton</option>
                <option value="Swimming">Swimming</option>
                <option value="Hockey">Hockey</option>
                <option value="Tennis"> Tennis</option>
                <option value="Skating">Skating</option>
                <option value="Basketball">Basket Ball</option>
                <option value="Volleyball">Volley Ball</option>
                <option value="Martial Arts">Martial Arts</option>
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="relative w-full md:w-[210px]">

              {/* Left Icon */}
              <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                📍
              </span>

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
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Gandhinagar">Gandhinagar</option>
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
>>>>>>> 0045eed090aedee2d9b96ef7652ecb9b7691f254
  );
}

export default Herosection;
