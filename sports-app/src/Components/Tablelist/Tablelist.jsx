import React, { useState, useEffect } from "react";
import academiesFullData from "../../Data/academiesFullData";
import API from "../../api/axios";

function Tablelist({ onRowClick }) {
  const [filter, setFilter] = useState("all");
  const [dbAcademies, setDbAcademies] = useState([]);

  useEffect(() => {
    fetchAcademies();
  }, []);

  const fetchAcademies = async () => {
    try {
      const res = await API.get("/academies");
      if (res.data.success) {
        setDbAcademies(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Static + DB merge
  const allAcademies = [
    ...academiesFullData.map(a => ({ ...a, isStatic: true })),
    ...dbAcademies.map(a => ({
      ...a,
      id: a._id,
      sports: a.sports || [],
      isStatic: false,
    })),
  ];

  const filteredData = filter === "all"
    ? allAcademies
    : allAcademies.filter((academy) => {
        const status = academy.status?.toLowerCase();
        if (filter === "approved") return status === "active" || status === "approved";
        if (filter === "pending") return !status || status === "pending";
        if (filter === "rejected") return status === "rejected";
        return true;
      });

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow">

      {/* TITLE + FILTER BUTTONS */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Academies List</h2>

        <div className="flex gap-2 flex-wrap">
          <FilterBtn label="All"      value="all"      filter={filter} setFilter={setFilter} />
          <FilterBtn label="Approved" value="approved" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Pending"  value="pending"  filter={filter} setFilter={setFilter} />
          <FilterBtn label="Rejected" value="rejected" filter={filter} setFilter={setFilter} />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b">
            <tr>
              <th className="pb-3">Academy Name</th>
              <th className="pb-3">City</th>
              <th className="pb-3">Sports</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filteredData.map((academy) => (
              <tr
                key={academy.id || academy._id}
                onClick={() => onRowClick && onRowClick(academy)}
                className="border-b hover:bg-blue-50 cursor-pointer transition"
              >
                <td className="py-3 font-medium text-blue-600 hover:underline">
                  {/* ✅ SIRF YE LINE BADLI */}
                  {academy.isStatic ? academy.name : academy.academyName}
                  {!academy.isStatic && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                      New
                    </span>
                  )}
                </td>

                <td className="py-3 text-gray-600">{academy.city}</td>

                <td className="py-3 text-gray-600">
                  {academy.sports?.join(", ") || "N/A"}
                </td>

                <td className={`py-3 font-medium capitalize ${
                  academy.status === "approved" ? "text-green-600" :
                  academy.status === "pending" ? "text-yellow-600" :
                  academy.status === "rejected" ? "text-red-600" :
                  "text-gray-600"
                }`}>
                  {academy.status || "pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Tablelist;

function FilterBtn({ label, value, filter, setFilter }) {
  const active = filter === value;
  return (
    <button
      onClick={() => setFilter(value)}
      className={`px-4 py-1 rounded-lg text-sm font-medium transition ${
        active ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
}