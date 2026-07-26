import React from "react";
import data from "./data";

export default function Skills(){

  const skl = data.skl.map((obj)=>{
    return(
      <div className="single-xp" key={obj.id}>
        <p>{obj.name}</p>
      </div>
    )
  })


  return(
    <div className="basicbox skills">
      <h1>Skills</h1>
      {skl}
    </div>
  )
}