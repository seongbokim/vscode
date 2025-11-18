import "./App.css";
//import Plus from "./1118/1118c.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./1118/About.jsx";
import Home from "./1118/Home.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
