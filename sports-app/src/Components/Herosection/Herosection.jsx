import React from "react";
import heroBg from "../../assets/hero-bg.png"; // ← apni image ka path yahin rakho

function Herosection() {
  return (
    <div
      className="min-h-[95vh] relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
  );
}

export default Herosection;
