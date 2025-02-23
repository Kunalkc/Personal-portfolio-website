import React from "react";
import Experience from "./Resumecontent/Experience";
import Education from "./Resumecontent/Education";
import Projects from "./Resumecontent/projects";
import Skills from "./Resumecontent/Skills";
import About from "./Resumecontent/About";
import Contact from "./Resumecontent/Contact";

export default function codearea(){
  return(
    <div className="codearea">
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}