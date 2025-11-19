import "./App.css";
//import Plus from "./1118/1118c.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./1118/About.jsx";
import Home from "./1118/Home.jsx";
import Profile from "./1118/Profile.jsx";
//import Person from "./1119/Person.jsx";
import Article from "./1119/Article.jsx";
import Articles from "./1119/Articles.jsx";
import Nav from "./1119/Nav.jsx";
import Layout from "./1119/Layout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}