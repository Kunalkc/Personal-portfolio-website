import React from "react";

export default function Filebar(props){

 /*  const files= props.tabState.map((Singleobj)=>{
    return(
      <div className={`filebar-item ${Singleobj.selected ? "selected-file" : ""}`}>
        <p>{Singleobj.filename}</p>
      </div>
    )
  })
 */
  return(
    <div className="file-bar">

      { !props.colorTab&& <> <h2 className="filebar-title">Files</h2>
     
      <div onClick={()=>props.select("Full Resume")} className={`filebar-item ${props.tabState.get("Full Resume").selected ? "selected-file" : ""}`}>
        <p>Full Resume</p>
      </div>

      <div onClick={()=>props.select("Education")} className={`filebar-item ${props.tabState.get("Education").selected ? "selected-file" : ""}`}>
        <p>Education</p>
      </div>

      <div onClick={()=>props.select("Experience")} className={`filebar-item ${props.tabState.get("Experience").selected ? "selected-file" : ""}`}>
        <p>Experience</p>
      </div>
      <div onClick={()=>props.select("Skills")} className={`filebar-item ${props.tabState.get("Skills").selected ? "selected-file" : ""}`}>
          <p>Skills</p>
      </div>
      <div onClick={()=>props.select("Projects")} className={`filebar-item ${props.tabState.get("Projects").selected ? "selected-file" : ""}`}>
        <p>Projects</p>
      </div>
      <div onClick={()=>props.select("About")} className={`filebar-item ${props.tabState.get("About").selected ? "selected-file" : ""}`}>
        <p>About</p>
      </div>
      <div onClick={()=>props.select("Contact")} className={`filebar-item ${props.tabState.get("Contact").selected ? "selected-file" : ""}`}>
        <p>Contact</p>
      </div>
      </>
      }

      {
        props.colorTab && <>
        <h2 className="filebar-title">Themes</h2>

      <div className="themesection">

        <div onClick={()=>props.setTheme("Aqua")} className={`theme-item Aqua ${props.colors.get("Aqua") ? "selected-theme" : ""}`}>
        <p>Aqua</p>
       </div>
        <div onClick={()=>props.setTheme("Bloodymary")} className={`theme-item  Bloodymary ${props.colors.get("Bloodymary") ? "selected-theme" : ""}`}>
        <p>Bloody Mary</p>
       </div>
        <div onClick={()=>props.setTheme("Thematrix")} className={`theme-item Thematrix ${props.colors.get("Thematrix") ? "selected-theme" : ""}`}>
        <p>The Matrix</p>
       </div>
        <div onClick={()=>props.setTheme("Thespacedeck")} className={`theme-item Thespacedeck ${props.colors.get("Thespacedeck") ? "selected-theme" : ""}`}>
        <p>Millennium Falcon</p>
       </div>
        <div onClick={()=>props.setTheme("Vanilla")} className={`theme-item  Vanilla ${props.colors.get("Vanilla") ? "selected-theme" : ""}`}>
        <p>Vanilla</p>
       </div>

       </div> 
        </>
      }

    </div>
  )
}