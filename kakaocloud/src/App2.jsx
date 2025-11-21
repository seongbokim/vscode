import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./1119/contexts/color";
import Home from "./1119/contexts/Home";
import Profile from "./1119/contexts/Profile";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ColorProvider>
    </BrowserRouter>
  );
}
