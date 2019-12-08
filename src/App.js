import React from "react";
import "./App.css";
import Navbar from "./pages/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <>
      <Navbar />
      <div id="wrapper">
        <div id="App">
          <Home />
          <About />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
