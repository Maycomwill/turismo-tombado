import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BlankPage } from "../pages/BlankPage";
import { Home } from "../pages/Home";
import { Forte5 } from "../pages/Forte5";
import { About } from "../pages/About";
import { Catalog } from "../pages/Catalog";
import { Contact } from "../pages/Contact";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BlankPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/catalog" element={<Catalog />}/> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/forte-5-pontas" element={<Forte5 />} />
      </Routes>
    </Router>
  );
}
