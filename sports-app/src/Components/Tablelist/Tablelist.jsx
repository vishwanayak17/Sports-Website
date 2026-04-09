import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import academiesFullData from "../../Data/academiesFullData";

function Tablelist() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [dbAcademies, setDbAcademies] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      const res = await API.put(`/admin/academies/${id}/status`, { status });
      if (res.data.success) {
        alert(`Academy ${status} successfully! ✅`);
        fetchAcademies();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this academy?")) return;
    try {
      const res = await API.delete(`/admin/academies/${id}`);
      if (res.data.success) {
        alert("Academy deleted! 🗑️");
        fetchAcademies();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  // ✅ Normalize static + DB data
  const allAcademies = [
    ...academiesFullData.map(a => ({
      _id: a.id,
      name: a.name,
      city: a.city,
      sports: a.sports,
      status: a.status,
      isStatic: true,
    })),
    ...dbAcademies.map(a => ({
      _id: a._id,
      name: a.academyName || "N/A",
      city: a.city,
      sports: a.sports,
      status: a.status,
      isStatic: false,
    })),
  ];

  const filteredData = filter === "all"
    ? allAcademies
    : allAcademies.filter((a) => {
        if (filter === "pending") return !a.status || a.status === "pending";
        return a.status === filter;
      });

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading academies...</div>;
  }

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Academies List</h2>
        <div className="flex gap-2 flex-wrap">
          <FilterBtn label="All" value="all" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Approved" value="approved" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Pending" value="pending" filter={filter} setFilter={setFilter} />
          <FilterBtn label="Rejected" value="rejected" filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b">
            <tr>
              <th className="pb-3">Academy Name</th> 
              <th className="pb-3">City</th>
              <th className="pb-3">Sports</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No academies found
                </td>
              </tr>
            ) : (
              filteredData.map((academy) => (
                <tr key={academy._id} className="border-b hover:bg-gray-50 transition">
                  <td
                    onClick={() => navigate(`/academy/${academy._id}`)}
                    className="py-3 font-medium text-blue-600 cursor-pointer hover:underline"
                  >
                    {academy.name}
                    {!academy.isStatic && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                        New
                      </span>
                    )}
                  </td>
                  <td className="py-3">
                    {academy.city || "N/A"}
                  </td>
                  <td className="py-3">
                    {academy.sports?.length > 0 ? academy.sports.join(", ") : "N/A"}
                  </td>
                  <td className={`py-3 font-medium ${
                    academy.status === "approved" ? "text-green-600" :
                    academy.status === "rejected" ? "text-red-600" :
                    "text-yellow-600"
                  }`}>
                    {academy.status || "pending"}
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      {!academy.isStatic && (
                        <>
                          {academy.status !== "approved" && (
                            <button
                              onClick={() => handleStatus(academy._id, "approved")}
                              className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded-lg transition"
                            >
                              Approve
                            </button>
                          )}
                          {academy.status !== "rejected" && (
                            <button
                              onClick={() => handleStatus(academy._id, "rejected")}
                              className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded-lg transition"
                            >
                              Reject
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(academy._id)}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg transition"
                          >
                            Delete
                          </button>
                        </>
                      )}
                      {academy.isStatic && (
                        <span className="text-xs text-gray-400">Static Data</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
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
      className={`px-4 py-1 rounded-lg text-sm font-medium transition
      ${active ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
    >
      {label}
    </button>
  );
}
