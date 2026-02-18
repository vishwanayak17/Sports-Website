import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import academiesFullData from "../../Data/academiesFullData";

function Tablelist() {
  const navigate = useNavigate();

  // 🔹 filter state
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? academiesFullData
      : academiesFullData.filter((academy) => {
          const status = academy.status?.toLowerCase();

          if (filter === "approved") return status === "active" || status === "approved";
          if (filter === "pending") return status === "pending";
          if (filter === "rejected") return status === "rejected";

          return true;
        });
  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow">

      {/* TITLE + FILTER BUTTONS */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Academies List</h2>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 flex-wrap">
          <FilterBtn label="All" value="all" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Approved" value="approved" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Pending" value="pending" filter={filter} setFilter={setFilter} />
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
                key={academy.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* CLICKABLE NAME */}
                <td
                  onClick={() => navigate(`/academy/${academy.id}`)}
                  className="py-3 font-medium text-blue-600 cursor-pointer hover:underline"
                >
                  {academy.name}
                </td>

                <td>{academy.city}</td>

                <td>{academy.sports.join(", ")}</td>

                <td
                  className={`font-medium ${
                    academy.status === "approved"
                      ? "text-green-600"
                      : academy.status === "pending"
                      ? "text-yellow-600"
                      : academy.status === "rejected"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {academy.status || "approved"}
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

/* 🔹 FILTER BUTTON COMPONENT */

function FilterBtn({ label, value, filter, setFilter }) {
  const active = filter === value;

  return (
    <button
      onClick={() => setFilter(value)}
      className={`px-4 py-1 rounded-lg text-sm font-medium transition
      ${active
        ? "bg-blue-600 text-white"
        : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
}
