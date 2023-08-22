import "./skills.css";
import { motion } from "framer-motion";
import IconTicker from "../../components/icon-ticker/IconTicker";

const Skills: React.FC = () => {
  return (
    <motion.div
      className="skills"
      key="skills"
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-300px", position: "absolute" }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-content">
        <h1 className="skills-heading">My skills</h1>
        <div className="ticker-1">
          <IconTicker duration={20} />
        </div>
        <div className="ticker-2">
          <IconTicker duration={45} />
        </div>
        <div className="ticker-3">
          <IconTicker duration={15} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
