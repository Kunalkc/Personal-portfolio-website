import React from "react";
import photosdata from "./content/photosdata";
export default function Photos(props){

    const albums = photosdata.map((item)=>{
        return(
            <div onClick={() => (props.albumselector(item.ID))} className="album-tile">
               <img className="album-cover" src={item.thumbnail}></img>
               <p>{item.description}</p> 
            </div>
        )
    })

    return(
        <div className="main-container">
            {!props.albums && <a onClick={props.togglealbum} className="album-link">View Albums</a>}
            {(props.albums&& !props.albumselected) &&
                 <div className="album-tiles-page">
                {albums}
                </div>
            }
            { props.albumselected ?  
              <p>hasdoao</p> : <></>

            }
        </div>
    )
}