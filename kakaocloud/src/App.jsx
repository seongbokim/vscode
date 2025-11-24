import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./context/Home.jsx";
import Signup from "./context/signup.jsx";
import Write from "./context/Write.jsx";
import "./App.css";
import View from "./context/View.jsx";
import DataUser from "./context/DataUser.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <DataUser>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </DataUser>
    </BrowserRouter>
  );
}
