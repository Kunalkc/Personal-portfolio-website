import React from "react";
import Experience from "./Resumecontent/Experience";
import Education from "./Resumecontent/Education";
import Projects from "./Resumecontent/projects";
import Skills from "./Resumecontent/Skills";
import About from "./Resumecontent/About";
import Contact from "./Resumecontent/Contact";

export default function codearea(props){

  const mainRef = React.useRef();  // attached to scrollable code area to watch it
  const minimapRef = React.useRef();  //attached to minimap
  
  /* const wiggleforminimap = mainRef.current.scrollHeight - mainRef.current.clientHeight  */

  const wiggleForMinimap = mainRef.current && (mainRef.current.scrollHeight > mainRef.current.clientHeight) 
    ? mainRef.current.scrollHeight - mainRef.current.clientHeight 
    : 0;

  const [scrollTop,setScrollTop] = React.useState(10)    // the amount that has been scrolled
  const [scrollHeight,setScrollHeight] = React.useState(0)   // total height of scrollable area
  const [visibleHeight, setVisibleHeight] = React.useState(0);

  console.log(wiggleForMinimap)

  React.useEffect(()=>{

    //sets the position of scroll bar from the top on the minimap
    const handleScroll = () => {
      setScrollTop(mainRef.current.scrollTop);
      minimapRef.current.scrollTop = wiggleForMinimap * scrollRatio;    //  DIFFERENCE OF VISIBLE AREA AND TOTAL SCROLL HEIGHT OF MINIMAP = WIGGLE ROOM FOR SCROLL x SCROLL RATIO
    };
    
    //gets us the total length of content and the content on screen
    const updateDimensions = () => {
      setScrollHeight(mainRef.current.scrollHeight); // Total height of scrollable content
      setVisibleHeight(mainRef.current.clientHeight); // Height of visible area
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    mainRef.current.addEventListener('scroll', handleScroll);  //Handles the scroll and moves scroll bar
    
    // REMOVE EvenT listeners when we exit 
    return () => {
      window.removeEventListener('resize', updateDimensions);
      mainRef.current.removeEventListener('scroll', handleScroll);
    };
  },[])


  const scrollRatio = visibleHeight / scrollHeight; // Ratio of visible area to total content of codearea
  const scrollbarHeight = scrollRatio * 100;         // height of the moving cursor
  const scrollbarTop = (scrollTop / scrollHeight) * 100;        // position of moving cursor thing calculated as how much content has been scrolled divided by total scrollabke height

  //array of objects is being passes
  return(
    <div className="maincontent-wrapper">
    <div ref={mainRef}  /* Attach ref to access DOM element */ className="codearea">
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

    <div style ={{
       position: 'absolute',
       right:'0',
       top: `${scrollbarTop}%`,
       height: `${scrollbarHeight}%`,
       width: '10%',
       backgroundColor: 'rgba(255, 255, 255, 0.779)'
    }}></div> {/* the moving cursor */}

    <div ref={minimapRef} className="minimap">
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

    </div>
  )
}