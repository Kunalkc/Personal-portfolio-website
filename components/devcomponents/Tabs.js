import React from "react";

export default function Tabs(props){
  const tabs = props.tabState.map((Singleobj)=>{
    return(
      <div className={`tab-item ${Singleobj.onTab ? "selected-tab" : ""}`}>
        <p>{Singleobj.filename}</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>
    )
  })

  return(
    <div className="tabs">
      {tabs}
      {/* <div className="tab-item selected-tab">
        <p>Full Resume</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>Education</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>Experience</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>Skills</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>Projects</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>About</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div>

      <div className="tab-item">
        <p>Contact</p>
        <img src="components/devcomponents/devimg/close.png" className="close-icon" width={20} height={20}></img>
      </div> */}
      <div className="remainingarea-tab">

      </div>
    </div>
  )
}