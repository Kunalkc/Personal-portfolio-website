import React from "react";
import Filmdata from "./content/filmdata"

export default function Filmtiles(){

    const tiles = Filmdata.map((item)=>{
        return(
            <div className="film-tile">
                 <img src={item.url}></img>
                 <p>{item.description}</p>
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