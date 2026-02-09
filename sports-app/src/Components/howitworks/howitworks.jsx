import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-gray-600">
            A complete sports academy management solution for
            Ahmedabad & Gandhinagar
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-blue-600 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">
              Verified Academies
            </h3>
            <p className="text-gray-600 text-sm">
              All academies are verified by admin for quality and trust.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">
              Role-Based Dashboard
            </h3>
            <p className="text-gray-600 text-sm">
              Separate dashboards for users, academy owners, and admin.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-blue-600 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">
              Easy Enrollment
            </h3>
            <p className="text-gray-600 text-sm">
              Users can easily enroll in academies with a simple process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-blue-600 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">
              Admin Control
            </h3>
            <p className="text-gray-600 text-sm">
              Admin manages academies, users, and overall platform security.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
