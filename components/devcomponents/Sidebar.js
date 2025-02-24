import React from "react";

export default function Sidebar(props){
  return(
    <div className="side-bar">
      
      <div className="side-bar-top">
     <div onClick={()=>props.changeSection("Files")} className={`fileiconimage ${ !props.colorTab ? "selected-section" : ""}`}><img src="components/devcomponents/devimg/fileicon.png" width={40} height={40} title="Files"></img></div>
     <div onClick={()=>props.changeSection("Themes")} className={`fileiconimage ${props.colorTab ? "selected-section" : ""}`}><img src="components/devcomponents/devimg/themes.png" width={40} height={40} title="Themes"></img></div>
      </div>

     <div className="fileiconimage"><a href="index.html"><img src="components/devcomponents/devimg/shutdown.png" width={40} height={40} title="Home"></img></a></div>
    </div>
  )
}