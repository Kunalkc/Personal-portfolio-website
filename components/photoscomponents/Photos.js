import React from "react";
import photosdata from "./content/photosdata";
export default function Photos(props){

    const albums = photosdata.map((item)=>{
        return(
            <div onClick={() => (props.albumselector(item.ID))} className="album-tile">
               <img className="album-cover" src={item.thumbnail}></img>
               <div className="text-container-album-tile">
               <h2>{item.albumtitle}</h2>
               <p>{item.description}</p> 
               </div>
            </div>
        )
    })

    let phototray

    if(props.albumselected){
  
        let selectedalbumobj

        for(let i=0;i<photosdata.length;i++){
            if(photosdata[i].ID === props.albumselected){
                   selectedalbumobj = photosdata[i]
            }
        }
        console.log(selectedalbumobj.photos)
       phototray = selectedalbumobj.photos.map((item)=>{
            return(
                <img className="image-container" src={item.url}></img>
            )
        })

        console.log(phototray)
    }else{
         phototray = []
    }

    return(
        <div className="main-container">
            {!props.albums && <a onClick={props.togglealbum} className="album-link">View Albums</a>}
            {(props.albums&& !props.albumselected) &&
                 <div className="album-tiles-page">
                {albums}
                </div>
            }
            { props.albumselected &&
              <div className="album-phototray">
              {phototray}
              </div>
            }
        </div>
    )
}