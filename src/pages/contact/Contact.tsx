import Hero from "../../components/hero-text/Hero";
import "./contact.css";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      key="contact"
      className="contact"
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-300px", position: "absolute" }}
      transition={{ duration: 0.5 }}
    >
      <Hero>Contact</Hero>
    </motion.div>
  );
};

export default Contact;
