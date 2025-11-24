import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./BBS/Home.jsx";
import Signup from "./BBS/Signup.jsx";
import Write from "./BBS/Write.jsx";
import "./App.css";
import { useState } from "react";
import View from "./BBS/View.jsx";

export default function App() {
  const [data, setData] = useState([
    { id: 1, title: "가", user: "홍길동", view: 20, like: 1 },
    { id: 2, title: "나", user: "이순신", view: 30, like: 5 },
    { id: 3, title: "다", user: "유관순", view: 15, like: 7 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home data={data} setData={setData} />} />
        <Route
          path="/write"
          element={<Write data={data} setData={setData} />}
        />
        <Route path="/view/:id" element={<View data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}
