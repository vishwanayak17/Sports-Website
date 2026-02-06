import React from "react";
import heroBg from "../../assets/hero-bg.png";

function Herosection() {
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
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 text-center">

        {/* Headings */}
        <h2 className="text-2xl md:text-3xl font-medium text-white">
          Find the Best
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-2">
          Sports Academies
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
          Near You
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-white mt-6">
          Explore top sports academies in
        </p>
        <p className="text-base md:text-lg text-white mb-10">
          Ahmedabad & Gandhinagar
        </p>

        {/* SEARCH BOX */}
        <div className="flex justify-center">
          <div
            className="
              bg-white rounded-2xl shadow-xl
              px-5 py-5
              w-full max-w-[640px]
              flex flex-col md:flex-row
              items-center gap-4
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
                w-full md:w-[140px]
                py-3
                rounded-xl
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
    </section>
  );
}

export default Herosection;
