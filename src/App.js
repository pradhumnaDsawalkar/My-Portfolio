import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "../src/components/Experience/Experience"; // Create if not already present
import Projects from "../src/components/Projects/Projects"; // Create if not already present
import Skills from "../src/components/Skillset/Skills"; // Create if not already present
import Contact from "../src/components/Contact/Contact"; // Create if not already present
import About from "../src/components/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
