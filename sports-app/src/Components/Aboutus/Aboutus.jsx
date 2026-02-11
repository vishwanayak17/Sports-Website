import React from "react";
import nk from "../../assets/nk.png";


const About = () => {
  return (
    <div className="min-h-screen text-white relative">

      {/* HERO SECTION WITH IMAGE */}
      <section
        className="relative text-center py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${nk})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-orange-600/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-cyan-300">Us</span>
          </h1>

          <p className="text-lg opacity-90 mb-10">
            Empowering Sports Academies Across Gujarat
          </p>

          {/* Why Choose Card */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-left">
            <h2 className="text-xl font-semibold mb-4 text-cyan-200">
              Why Choose Us?
            </h2>

            <ul className="space-y-3">
              <li>✔ Verified Academies</li>
              <li>✔ Easy Registration</li>
              <li>✔ City Based Search</li>
              <li>✔ Fast Approvals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* REST SECTION */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-500">

        {/* MISSION + FEATURES */}
        <section className="px-6 py-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">
              Our Mission
            </h2>
            <p className="mb-6">
              Helping players connect with the best sports academies in Gujarat.
            </p>

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full transition">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Trusted Platform</h3>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Rapid Growth</h3>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition">
              <h3 className="text-xl font-semibold">Community Support</h3>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="text-center py-16 px-6">
          <h2 className="text-3xl font-bold mb-10">
            Our Achievements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold">100+</h3>
              <p>Academies</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold">500+</h3>
              <p>Players</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold">2</h3>
              <p>Cities</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold">10+</h3>
              <p>Sports</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Us?
          </h2>

          <p className="mb-8 opacity-90">
            Grow your academy with us today!
          </p>

          <button className="bg-green-500 hover:bg-green-600 px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </section>

      </div>
    </div>
  );
};

export default About;
