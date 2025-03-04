import React from "react";
import Theatredata from "./content/theatredata"

export default function Theatre(props){

    const projects = Theatredata.projects.map( (item) =>   
        {
             return(
                <div className="single-project">
                <img src={item.thumbnail}></img>
                <div className="text-wrapper-project">
                 <h2>{item.title}</h2>
                 <p>{item.description}</p>
                 {item.link && <a href = {item.link}>link</a>}
                 </div>
                </div>
            )
        }
    )
    const photos = Theatredata.pics.map( (item) =>   
        {
             return(<img className="each-pic" src={item}></img>)
        }
    )

    return(
        <div className="theatre-main">
            <p className="theatre-text">I was part of dramatics club of our college in my undergrad, and it was one of the best experiences of my life. i learnt acting, direction, music, nukkad natak and what not. I made best of my friends in Pravah dramtics club of NIT Hamirpur you can some of the work I indulged in below and also some photographs of the fun times</p>
            <nav className="navtool">
                <p onClick={props.toggle} className={!props.photos ?  "highlight": ""}>projects</p>
                <p onClick={props.toggle} className={props.photos ? "highlight" : ""}>Photos</p>
            </nav>

            { props.photos &&

            <div className="pic-container">
                {photos}
            </div>
            }
            { !props.photos &&

            <div className="proj-container">
                {projects}
            </div>
            }
        </div>
    )
}