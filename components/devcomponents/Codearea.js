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
  

  const [scrollTop,setScrollTop] = React.useState(10)    // the amount that has been scrolled
  const [scrollHeight,setScrollHeight] = React.useState(0)   // total height of scrollable area
  const [visibleHeight, setVisibleHeight] = React.useState(0);
  const [minimapOverflowscroll,setminimapscroll] = React.useState(0)

  const [isDragging, setIsDragging] = React.useState(false);
  
  React.useEffect(() => {
    const updateScroll = () => {
      if (mainRef.current && minimapRef.current) {
        // Calculate the scroll ratio based on the main content area
        const totalScrollHeight = mainRef.current.scrollHeight;
        const visibleArea = mainRef.current.clientHeight;
        setScrollHeight(totalScrollHeight);
        setVisibleHeight(visibleArea);
        const scrollRatio = visibleArea / totalScrollHeight;
  
        // Calculate wiggle room for minimap using minimapRef
        const wiggleForMinimap = minimapRef.current.scrollHeight - minimapRef.current.clientHeight;
  
        // Determine the amount of scroll for minimap
        const minimapScroll = mainRef.current.scrollTop * (wiggleForMinimap / (totalScrollHeight - visibleArea));
        
        setScrollTop(mainRef.current.scrollTop);
        setminimapscroll(minimapScroll);
      }
    };
  
    // Initial update
    updateScroll();
  
    // Attach event listeners
    mainRef.current.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);
  
    // Cleanup
    return () => {
      mainRef.current.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);
  
  // This effect updates the minimap scroll position
  React.useEffect(() => {
    if (minimapRef.current) {
      minimapRef.current.scrollTop = minimapOverflowscroll;
    }
  }, [minimapOverflowscroll]);
  
  
  const handleMinimapClick = (event) => {
    if (mainRef.current && minimapRef.current) {
      const minimapRect = minimapRef.current.getBoundingClientRect();
      const clickY = event.clientY - minimapRect.top;
      const clickRatio = clickY / minimapRef.current.clientHeight;
      const newScrollTop = clickRatio * (scrollHeight - visibleHeight);
      mainRef.current.scrollTop = newScrollTop;
    }
  };

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

    <div ref={minimapRef} className="minimap" onClick={handleMinimapClick}>
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
             props.tabState.get("Full Resume").onTab) && <p className="all-tabs-closed">click on a file to open it</p>}   {/* BUG FIX FOR THE CASE WHEN NO FILE IS OPEN */}

    </div>

    </div>
  )
}