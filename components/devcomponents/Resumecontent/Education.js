import React from "react";
import data from "./data";



export default function Education(){


  const edc = data.ed.map((obj)=>{
    return(
      <div className="single-xp" key={obj.id}>
       <h1>{obj.College}</h1>
       <h2>{obj.Degree}</h2>
       <p>CGPA-{obj.Cgpi}</p>
      </div>
    )
  })

  return(
    <div className="basicbox education">
      <h1>Education</h1>
      {edc}
    </div>
  )
}