import React from "react";

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white shadow-md p-4 rounded-xl mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Owner Dashboard</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Total Students</h2>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Active Coaches</h2>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Upcoming Events</h2>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Recent Students Table */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Students</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Sport</th>
              <th className="border-b p-2">Joining Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Rahul Sharma</td>
              <td className="p-2">Cricket</td>
              <td className="p-2">01-Feb-2026</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Sneha Patel</td>
              <td className="p-2">Badminton</td>
              <td className="p-2">05-Feb-2026</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Amit Joshi</td>
              <td className="p-2">Football</td>
              <td className="p-2">07-Feb-2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerDashboard;
