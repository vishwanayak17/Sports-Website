import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white shadow-md p-4 rounded-xl mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Logout
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Total Academies</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Total Students</h2>
          <p className="text-2xl font-bold mt-2">480</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-gray-500 font-semibold">Pending Approvals</h2>
          <p className="text-2xl font-bold mt-2">4</p>
        </div>
      </div>

      {/* Academy Table */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Academy List</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">City</th>
              <th className="border-b p-2">Sports</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Ahmedabad Cricket Academy</td>
              <td className="p-2">Ahmedabad</td>
              <td className="p-2">Cricket</td>
              <td className="p-2 text-green-600 font-semibold">Active</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Gandhinagar Football Academy</td>
              <td className="p-2">Gandhinagar</td>
              <td className="p-2">Football</td>
              <td className="p-2 text-red-600 font-semibold">Pending</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="p-2">Ace Badminton Academy</td>
              <td className="p-2">Ahmedabad</td>
              <td className="p-2">Badminton</td>
              <td className="p-2 text-green-600 font-semibold">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
