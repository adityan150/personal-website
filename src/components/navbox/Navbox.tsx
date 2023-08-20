import "./navbox.css";
import { Link, useLocation } from "react-router-dom";

const Navbox: React.FC = () => {
  const location = useLocation();
  const page = location.pathname;

  let heroText = page.substring(1, 2);
  if (heroText === "") heroText = "H";

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
