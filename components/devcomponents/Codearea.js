import React from "react";
import Experience from "./Resumecontent/Experience";
import Education from "./Resumecontent/Education";
import Projects from "./Resumecontent/projects";
import Skills from "./Resumecontent/Skills";
import About from "./Resumecontent/About";
import Contact from "./Resumecontent/Contact";

export default function codearea(props){

  
  //array of objects is being passes
  return(
    <div className="codearea">
      {props.tabState.get("About").selected && <About/>}
      {props.tabState.get("Skills").selected && <Skills/>}
      {props.tabState.get("Experience").selected && <Experience/>}
      {props.tabState.get("Projects").selected && <Projects/>}
      {props.tabState.get("Education").selected && <Education/>}
      {props.tabState.get("Contact").selected && <Contact/>}
      {props.tabState.get("Full Resume").selected && <><About/>
       <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/> </>
      }
      
       {!(props.tabState.get("About").onTab ||
        props.tabState.get("Skills").onTab ||
         props.tabState.get("Experience").onTab ||
          props.tabState.get("Projects").onTab ||
           props.tabState.get("Education").onTab ||
            props.tabState.get("Contact").onTab ||
             props.tabState.get("Full Resume").onTab) && <p className="all-tabs-closed">click on a file to open it</p>}
    </div>
  )
}