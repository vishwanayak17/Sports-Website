<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import AboutUs from "./Components/Aboutus/Aboutus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
=======
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Academies from "./Components/Academies/Academies";
// import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
// import Home from "./Components/Home/Home";
//import OwnerDashboard from "./Components/Dashboard/OwnerDashboard"; // Owner dashboard design
import AdminDashboard from "./Components/Dashboard/AdminDashboard";

function App() {
  return (
    <div>
      {/* Routing temporarily disabled */}
      {/*
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academies" element={<Academies />} />
          <Route path="/academy/:id" element={<AcademiesDetails />} />
        </Routes>
      </Router>
      */}

      {/* Directly show Owner Dashboard for design preview */}
      {/* <OwnerDashboard /> */}
      <AdminDashboard/>
    </div>
>>>>>>> 7d4b1a3265468d6282d9369f3f8cbe66567a2a52
  );
}

export default App;
