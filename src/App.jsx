import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import TimeLine from "./components/TimeLine/TimeLine";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Map from "./components/Map/Map";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/DarkMode/DarkMode";

const App = () => {
  return (
    <div>
      <Header />
      <DarkMode />
      <Nav />
      <About />
      <TimeLine />
      <Skill />
      <Projects />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

