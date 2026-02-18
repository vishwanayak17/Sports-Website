import React from "react";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Academis from "./Components/Academies/Academies";
import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
import About from "./Components/Aboutus/Aboutus";
import Owner from "./Components/Dashboard/OwnerDashboard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Contact from "./Components/contact/contact";
import Admin from "./Components/adminpannel/Adminpanel";

function Layout() {
  const location = useLocation();

  // ❗ paths where navbar & footer should be hidden
  const hideLayout = location.pathname === "/adminpanel";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academis" element={<Academis />} />
        <Route path="/academy/:id" element={<AcademiesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/Owner" element={<Owner />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/adminpanel" element={<Admin />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
