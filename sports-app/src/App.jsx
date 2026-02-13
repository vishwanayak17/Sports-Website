import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import AboutUs from "./Components/Aboutus/Aboutus";
import Contact from "./Components/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
