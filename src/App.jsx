import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Internship from "./sections/Internship";
import Contact from "./sections/Contact";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Internship />
      <Contact />
    </MainLayout>
  );
}

export default App;
