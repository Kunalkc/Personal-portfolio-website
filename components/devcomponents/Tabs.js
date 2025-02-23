import React from "react";

export default function Tabs(props){

  return(
    <div className="tabs">

      { props.tabState.get("Full Resume").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Full Resume")} className={`tab-item ${props.tabState.get("Full Resume").onTab && props.tabState.get("Full Resume").selected ? "selected-tab" : ""}`}>
        <p>Full Resume</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Full Resume")}></img>
      </div>
      
      }
      { props.tabState.get("Education").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Education")} className={`tab-item ${props.tabState.get("Education").onTab && props.tabState.get("Education").selected ? "selected-tab" : ""}`}>
        <p>Education</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Education")}></img>
      </div>
      
      }
      { props.tabState.get("Experience").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Experience")} className={`tab-item ${props.tabState.get("Experience").onTab && props.tabState.get("Experience").selected ? "selected-tab" : ""}`}>
        <p>Experience</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Experience")}></img>
      </div>
      
      }
      { props.tabState.get("Skills").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Skills")} className={`tab-item ${props.tabState.get("Skills").onTab && props.tabState.get("Skills").selected ? "selected-tab" : ""}`}>
        <p>Skills</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Skills")}></img>
      </div>
      
      }
      { props.tabState.get("Projects").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Projects")} className={`tab-item ${props.tabState.get("Projects").onTab && props.tabState.get("Projects").selected ? "selected-tab" : ""}`}>
        <p>Projects</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Projects")}></img>
      </div>
      
      }
      { props.tabState.get("About").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("About")} className={`tab-item ${props.tabState.get("About").onTab && props.tabState.get("About").selected ? "selected-tab" : ""}`}>
        <p>About</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("About")}></img>
      </div>
      
      }

      { props.tabState.get("Contact").onTab && /* this code will play only if full-resume is on tab */
      
      <div onClick={()=>props.select("Contact")} className={`tab-item ${props.tabState.get("Contact").onTab && props.tabState.get("Contact").selected ? "selected-tab" : ""}`}>
        <p>Contact</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20} onClick={() => props.removetab("Contact")}></img>
      </div>
      
      }

     
      <div className="remainingarea-tab">

      </div>
    </div>
  )
}