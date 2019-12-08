import React from "react";
import "./App.css";
import Navbar from "./pages/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
