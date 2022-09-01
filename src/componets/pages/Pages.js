import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import People from "./People";
import Publications from "./Publications";
import Projects from "./Projects";
import Contact from "./Contact";

function Pages() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="publications" element={<Publications />} />
    <Route path="people" element={<People />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
  );
}

export default Pages;