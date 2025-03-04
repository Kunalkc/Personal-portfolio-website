import React from "react";
import Traveldata from "./content/Traveldata"

export default function Traveltiles(){

    const tiles = Traveldata.map((item)=>{
        return(
            <div className="travel-tile">
                 <img className="thumbnail-image-travel" src={item.thumbnail}></img>
                 <div className="text-container-travel"> 
                 <h1>{item.title}</h1>
                 <p>{item.description}</p>
                 </div>
            </div>
        )
    }
    )

    return(
        <div className="tiles-container-travel">
            {tiles}
        </div>
    )
}