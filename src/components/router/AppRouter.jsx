import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Navbar from "../layout/Navbar";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import ScrollToTop from "../layout/ScrollToTop";


const AppRouter = () => {
  return (
    <BrowserRouter>
  <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
