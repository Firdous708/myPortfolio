import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Zoom } from "react-awesome-reveal";
import Githubstatus from "./components/Githubstatus";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content flex flex-row">
        <Leftside />
        <div className="content md:ml-[40px] mt-32">
          <Zoom duration={2000} triggerOnce>
            <Intro />
          </Zoom>
          <Zoom duration={2000} triggerOnce>
            <About />
          </Zoom>
          <Zoom duration={2000} triggerOnce>
            <Education />
          </Zoom>
          <Projects />
          <Githubstatus />
          <Zoom duration={1000} triggerOnce>
            <Contact />
          </Zoom>
          <Footer />
        </div>

        <Rightside />
      </div>
    </Router>
  );
}
