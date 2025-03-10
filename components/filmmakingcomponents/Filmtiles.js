import React from "react";
import Filmdata from "./content/filmdata"

export default function Filmtiles(){

    const tiles = Filmdata.map((item)=>{
        return(
            <div className="film-tile">
                 <img className="thumbnail-image" src={item.thumbnail}></img>
                 <div className="text-container"> 
                 <p>{item.title}</p>
                 <a href={item.url}><img className="clickable-thumbnail" src="./img/youtube.png" width="30px" height="30px"></img></a>
                 </div>
            </div>
        )
    }
    )

    return(
        <div className="tiles-container">
            {tiles}
        </div>
    )
}