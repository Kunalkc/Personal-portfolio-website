import React from "react";
import data from "./data";

export default function Contact(){

  return(
    <div className="basicbox contact">
      <h1>Contact</h1>
      <div className="single-xp">
        <p>Ph: {data.cont.ph}</p>
        <p>Email: {data.cont.email}</p>
      </div>
    </div>
  )
}