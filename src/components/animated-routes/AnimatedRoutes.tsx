import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Skills from "../../pages/skills/Skills";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
