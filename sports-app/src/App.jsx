import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Academies from "./Components/Academies/Academies";
import AcademiesDetails from "./Components/AcademiesDetails/AcademiesDetails";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/academies" element={<Academies />} />
        <Route path="/academy/:id" element={<AcademiesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
