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
  );
}

export default App;
