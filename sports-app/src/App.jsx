import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Academies from "./Components/Academies/Academies";
import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
import About from "./Components/Aboutus/Aboutus";
import Owner from "./Components/Dashboard/OwnerDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Contact from "./Components/contact/contact";
import Admin from "./Components/adminpannel/Adminpanel";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academies" element={<Academies />} />
        <Route path="/academy/:id" element={<AcademiesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/Owner" element={<Owner />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/adminpanel" element={<Admin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;