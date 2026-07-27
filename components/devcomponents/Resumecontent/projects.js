import React from "react";
import data from "./data";

export default function Projects(){

  const prj = data.proj.map((obj)=>{
    return(
      <div className="single-xp" key={obj.id}>
        <h1>{obj.Title}</h1>
        <p>{obj.description}</p>
        <p>Tech: {obj.tech}</p>
        <p>
          <a href={obj.link}>
          Github Link
          </a>    
        </p>
      </div>
    )
  })

  return(
    <div className="basicbox projects">
      <h1>Projects</h1>
      {prj}
    </div>
  )
}