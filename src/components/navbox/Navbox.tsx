import "./navbox.css";
import { Link, useLocation } from "react-router-dom";

// type Breakpoint = {
//   min: number;
//   max: number;
//   prev: string;
//   next: string;
// };
//
// const breakpoints: Record<string, Breakpoint> = {
//   "/": { min: 0, max: 19, prev: "/", next: "/skills" },
//   "/skills": { min: 20, max: 39, prev: "/", next: "/projects" },
//   "/projects": { min: 40, max: 59, prev: "/skills", next: "/contact" },
//   "/contact": { min: 60, max: 79, prev: "/projects", next: "/about" },
//   "/about": { min: 80, max: 101, prev: "/contact", next: "/contact" },
// };

const Navbox: React.FC = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <div className="navbox">
      <div className="navbox__link-container">
        <Link className={`navlink ${page === "/" ? "active" : ""}`} to="/">
          Home
        </Link>
        <Link
          className={`navlink ${page === "/skills" ? "active" : ""}`}
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className={`navlink ${page === "/projects" ? "active" : ""}`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`navlink ${page === "/contact" ? "active" : ""}`}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={`navlink ${page === "/about" ? "active" : ""}`}
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbox;
