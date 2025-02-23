import React from "react";
import Data from "./data"
export default function Experience(){

  const xp = Data.exp.map((obj)=>{
    return(
      <div className="single-xp" key={obj.id}>
          <h1>{obj.position}</h1>
          <h2>{obj.location}</h2>
          <p>{obj.startdate.toISOString().split('T')[0]} - {obj.enddate.toISOString().split('T')[0]}</p>
       {/*    <p>{obj.enddate}</p> */}
          <p>{obj.summary}</p>
      </div> 
    )
  })

  return(
    <div className="basicbox experience">
      <h1>Experience</h1>
       {xp}
    </div>
  )
}