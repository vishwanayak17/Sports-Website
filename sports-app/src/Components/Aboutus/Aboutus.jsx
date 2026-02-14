import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


/* ✅ Counter Component */
const Counter = ({ target, duration = 2000, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return <span>{count}+</span>;
};

const AboutSportsAcademy = () => {
  const navigate = useNavigate();
  const statsRef = useRef();
  const [visible, setVisible] = useState(false);

  /* ✅ Detect when stats visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 mt-16">

      {/* PAGE TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          About Our Sports Academy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We train athletes with passion, discipline, and professional guidance
          to achieve excellence in sports and life.
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
            alt="sports"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              Our Sports Academy is dedicated to developing athletes of all ages.
              We provide structured training programs, expert guidance, and
              world-class facilities to help players reach their full potential.
            </p>

            <p className="text-gray-600 mb-6">
              From beginners to professionals, we focus on skill development,
              fitness, teamwork, and sportsmanship.
            </p>

          <button
  onClick={() => navigate("/academis")}
  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
>
  Join Our Academy
</button>

          </div>

        </div>
      </div>

      {/* MISSION VISION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Mission</h2>
          <p className="text-gray-600">
            To build strong, skilled, and confident athletes through
            professional coaching, discipline, and modern training techniques.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Vision</h2>
          <p className="text-gray-600">
            To become the most trusted sports training academy that inspires
            excellence, leadership, and success.
          </p>
        </div>

      </div>

      {/* FACILITIES */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Our Facilities
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Modern Playground</h3>
            <p className="text-gray-600">International standard sports ground.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Fitness Training</h3>
            <p className="text-gray-600">Professional gym and fitness programs.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Expert Coaching</h3>
            <p className="text-gray-600">Certified and experienced trainers.</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Why Choose Our Academy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
            <p className="text-gray-600">Structured programs for skill development.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">Supportive and disciplined atmosphere.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600">Opportunities in competitions & tournaments.</p>
          </div>
        </div>
      </div>

      {/* ✅ STATS WITH SCROLL COUNTER */}
      <div
        ref={statsRef}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600">
            <Counter target={500} start={visible} />
          </h3>
          <p className="text-gray-600">Students</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600">
            <Counter target={20} start={visible} />
          </h3>
          <p className="text-gray-600">Coaches</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600">
            <Counter target={10} start={visible} />
          </h3>
          <p className="text-gray-600">Sports</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-600">
            <Counter target={15} start={visible} />
          </h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </div>

    </div>
  );
};

export default AboutSportsAcademy;
