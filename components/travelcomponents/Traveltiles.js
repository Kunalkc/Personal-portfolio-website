import React from "react";
import Traveldata from "./content/Traveldata"

export default function Traveltiles(){

    const tiles = Traveldata.map((item)=>{
        return(
            <div className="travel-tile">
                 {/* <img className="thumbnail-image" src={item.thumbnail}></img>
                 <div className="text-container"> 
                 <p>{item.title}</p>
                 <a href={item.url}><img className="clickable-thumbnail" src="./img/youtube.png" width="30px" height="30px"></img></a>
                 </div> */}
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