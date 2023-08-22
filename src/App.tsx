import { BrowserRouter } from "react-router-dom";
import Navbox from "./components/navbox/Navbox";
import "./App.css";
import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="scroll-context">
        <div className="root-container">
          <Navbox />
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
