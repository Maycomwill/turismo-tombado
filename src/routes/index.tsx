import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlankPage } from "../pages/BlankPage";
import { Home } from "../pages/Home";
import { Forte5 } from "../pages/Forte5";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BlankPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />}/> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forte-5-pontas" element={<Forte5 />} />
      </Routes>
    </Router>
  );
}
