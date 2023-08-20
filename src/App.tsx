import { BrowserRouter } from "react-router-dom";
import Navbox from "./components/navbox/Navbox";
import "./App.css";
import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbox />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
