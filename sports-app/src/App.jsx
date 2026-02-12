import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Academies from "./Components/Academies/Academies";
 import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
 import Home from "./Components/Home/Home";
//import OwnerDashboard from "./Components/Dashboard/OwnerDashboard"; // Owner dashboard design
//import AdminDashboard from "./Components/Dashboard/AdminDashboard";

function App() {
  return (
    <div>
   
      {
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academies" element={<Academies />} />
          <Route path="/academy/:id" element={<AcademiesDetails />} />
        </Routes>
      </Router>
      }

      {/* Directly show Owner Dashboard for design preview */}
      {/* { <OwnerDashboard /> } */}
      {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
