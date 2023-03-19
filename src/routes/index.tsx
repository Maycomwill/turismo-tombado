import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BlankPage } from "../pages/BlankPage";
import { Home } from "../pages/Home";
import { Forte5 } from "../pages/Forte5";

export function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<BlankPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/catalog" />
        <Route path="/contact" />
        <Route path="/forte-5-pontas" element={<Forte5 />} />
      </Routes>
    </Router>
  );
}
