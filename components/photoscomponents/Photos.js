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
    let selectimage;
    let selecttext

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
                <img onClick={() => props.selectimage(item.ID)} className={`image-container ${props.selectedimage === item.ID ? "highlight-image" : "" }`} src={item.url}></img>
            )
        })

     

        if(props.selectedimage){

           for(let i=0; i<selectedalbumobj.photos.length; i++)
           {
            if(props.selectedimage === selectedalbumobj.photos[i].ID ){
                selectimage = <img  className= "selected-image"  src={selectedalbumobj.photos[i].url}></img>
                selecttext = selectedalbumobj.photos[i].description
            }
           }
        }
        
    }else{
         phototray = []
    }

    console.log(selecttext)

    return(
        <div /* className="main-container" onClick = { props.selectedimage ? props.showdescription : ()=>{}} */
        className="main-container"
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.classList.contains("image-description")) {
            props.selectedimage ? props.showdescription() : null;
          }
        }}
        >
            {props.selectedimage && selectimage}
            {
                props.selectedimage && props.description && <p className="image-description">{selecttext}</p> 
            }
            {!props.albums && <a onClick={props.togglealbum} className="album-link">View Albums</a>}
            {(props.albums&& !props.albumselected) &&
                 <div className="album-tiles-page">
                {albums}
                </div>
            }
            { props.albumselected  &&
              <div className={`album-phototray ${props.selectedimage ? "downtray" : ""}`}>
              {phototray}
              </div>
            }
        </div>
    )
}