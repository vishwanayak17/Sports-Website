import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Academies from "./Components/Academies/Academies";
import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
import About from "./Components/Aboutus/Aboutus";
import Owner from "./Components/Dashboard/OwnerDashboard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import Contact from "./Components/contact/contact";
import Admin from "./Components/adminpannel/Adminpanel";
import AcademyDashboard from "./Components/AcademyDashboard/AcademyDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function Layout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/adminpanel" ||
    location.pathname === "/academy-dashboard";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academies" element={<Academies />} />
        <Route path="/academy/:id" element={<AcademiesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/Owner" element={<Owner />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/academy-dashboard" element={<AcademyDashboard />} />
        <Route
          path="/adminpanel"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
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