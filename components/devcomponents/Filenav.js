import React from "react";

export default function Filebar(){
  return(
    <div className="file-bar">
      <h2 className="filebar-title">Files</h2>
      <div className="filebar-item selected-file"><p>Full Resume</p></div>
      <div className="filebar-item"><p>Education</p></div>
      <div className="filebar-item"><p>Experience</p></div>
      <div className="filebar-item"><p>Skills</p></div>
      <div className="filebar-item"><p>Projects</p></div>
      <div className="filebar-item"><p>About</p></div>
      <div className="filebar-item"><p>Contact</p></div>
    </div>
  )
}