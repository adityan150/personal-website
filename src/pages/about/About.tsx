import Hero from "../../components/hero-text/Hero";
import "./about.css";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      key="about"
      className="about"
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-300px", position: "absolute" }}
      transition={{ duration: 0.5 }}
    >
      <Hero>About</Hero>
    </motion.div>
  );
};

export default About;
