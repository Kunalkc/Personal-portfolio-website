import React from "react";
import data from "./data";

export default function About(){
  return(
    <div className="basicbox about">
      <h1>About</h1>
      <p className="single-xp">{data.ab}</p>
    </div>
  )
}