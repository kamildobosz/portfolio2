import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import ProjectsList from "./components/ProjectsList";
import "./styles/App.css";
import "./styles/Welcome.css";
import "./styles/About.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
}

export default App;
