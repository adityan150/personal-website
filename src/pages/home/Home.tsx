import { motion } from "framer-motion";

import "./home.css";

const Home: React.FC = () => {
  return (
    <motion.div
      key="home"
      className="home"
      initial={{ opacity: 0, x: "300px" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-300px", position: "absolute" }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        <h1 className="home-title">
          <span>Hi, I'm</span> <span>Aditya Nautiyal</span>
        </h1>
        <p className="home-text">
          I am a full stack web developer with passion for tech.
          <br /> I am currently pursuing my bachelor's degree in Computer
          Science.
        </p>
        <p className="home-text">I love to build stuff :)</p>
      </div>
    </motion.div>
  );
};

export default Home;
