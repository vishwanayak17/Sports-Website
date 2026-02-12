import React from "react";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { Router, Routes ,Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Academis from "./Components/Academies/Academies";
import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
import About from "./Components/Aboutus/Aboutus";
import Owner from "./Components/Dashboard/OwnerDashboard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

        <Routes>    
          <Route path="/" element= {<Home/>} />
          <Route path="/academis" element= {<Academis/>} />
          <Route path="/academy/:id" element= {<AcademiesDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Owner" element= {<Owner/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        </Routes>

    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
