import React from "react";

export default function Filebar(props){

  const files= props.tabState.map((Singleobj)=>{
    return(
      <div className={`filebar-item ${Singleobj.selected ? "selected-file" : ""}`}>
        <p>{Singleobj.filename}</p>
      </div>
    )
  })

  return(
    <div className="file-bar">
      <h2 className="filebar-title">Files</h2>
      {files}
      {/* <div className="filebar-item selected-file"><p>Full Resume</p></div>
      <div className="filebar-item"><p>Education</p></div>
      <div className="filebar-item"><p>Experience</p></div>
      <div className="filebar-item"><p>Skills</p></div>
      <div className="filebar-item"><p>Projects</p></div>
      <div className="filebar-item"><p>About</p></div>
      <div className="filebar-item"><p>Contact</p></div> */}
    </div>
  )
}