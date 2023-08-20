import { motion } from "framer-motion";
import Hero from "../../components/hero-text/Hero";
import "./projects.css";

const Projects: React.FC = () => {
  return (
    <motion.div
      key="projects"
      className="projects"
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-300px", position: "absolute" }}
      transition={{ duration: 0.5 }}
    >
      <Hero>Projects</Hero>
    </motion.div>
  );
};

export default Projects;
