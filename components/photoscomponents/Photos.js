import React from "react";
import photosdata from "./content/photosdata";
export default function Photos(props){

    // to show album tiles on albums page
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
    let selectedalbumobj
    // once an album is selected this code would display photographs
    if(props.albumselected){
  
        for(let i=0;i<photosdata.length;i++){
            if(photosdata[i].ID === props.albumselected){
                   selectedalbumobj = photosdata[i]
            }
        }
       phototray = selectedalbumobj.photos.map((item)=>{
            return(
                <img onClick={() => props.selectimage(item.ID)} className={`image-container ${props.selectedimage === item.ID ? "highlight-image" : "" }`} src={item.url}></img>
            )
        })

     
      console.log(props.selectedimage)
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

    function changeimage(event){
        
         
         if (event.key === "ArrowLeft") {console.log("left key")
        
         }
         if (event.key === "ArrowRight") {console.log("right key")}

         console.log(props.selectedimage)
        if(props.selectedimage){
            if (event.key === "ArrowLeft") {
                console.log("handle left click called")
                if(props.selectedimage!= 1)
                {
                    props.selectimage(props.selectedimage - 1)
                }
            }
            
            if (event.key === "ArrowRight") {
                console.log("handle right click called")
                if(props.selectedimage != selectedalbumobj.photos.length)
                    {
                        props.selectimage(props.selectedimage + 1)
                    }
            }
        }else{
            return
        }
    }
   
    React.useEffect(() => {
        const handleKeyDown = (e) => {
          changeimage(e);
        };
      
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [props.selectedimage]);
    
    




















// SLIDER CODE  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const trackRef  = React.useRef()
    const [mouseDownAt, setMouseDownAt] = React.useState(0);
    const prevPercentageRef = React.useRef(0);   // stores the last percentage for the image track so that it remembers where to stay
    const [percentage, setPercentage] = React.useState(0);


    const animateSlider = (nextPercentage) => {
        if (trackRef.current) {
            trackRef.current.animate(
                { transform: `translate(${nextPercentage}%, -0%)` },
                { duration: 1200, fill: "forwards" }
            );

            for (const image of trackRef.current.getElementsByClassName("image-container")) {
                image.animate(
                    { objectPosition: `${100 + nextPercentage}% center` },
                    { duration: 1200, fill: "forwards" }
                );
            }
        }
    };

    const handlePointerDown = (e) => {
        setMouseDownAt(e.clientX);
    };

    const handlePointerUp = () => {
        setMouseDownAt(0);
        prevPercentageRef.current = percentage;
    };

    const handlePointerMove = (e) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = e.clientX - mouseDownAt;  // Difference from initial click
        const maxDelta = window.innerWidth / 2;
        const newPercentage = (mouseDelta / maxDelta) * 100; // Directly mapped to a range of -100 to 100

        console.log("New Percentage:", newPercentage);
        console.log("prevPercentageRef.current", prevPercentageRef.current);
    
        const nextPercentage = Math.max(Math.min(prevPercentageRef.current + newPercentage, 0), -100);
        
       /*  prevPercentageRef.current = nextPercentage;   */
        setPercentage(nextPercentage);
        animateSlider(nextPercentage);
    };
  // to be able to have same effect on scrolling 
 
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior

    const delta = e.deltaY > 0 ? 5 : -5;
    const nextPercentageUnconstrained = prevPercentageRef.current - delta;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);
    prevPercentageRef.current = nextPercentage;  // Update ref immediately

    console.log(nextPercentage)
    animateSlider(nextPercentage);
};

  React.useEffect(() => {
    if (props.albumselected) {
        window.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
        window.removeEventListener("wheel", handleWheel);
    };
   }, [props.albumselected]);

// slider effect end ----------------------------------------------------------------------------------------------------------------------------------
  


return(
        <div /* className="main-container" onClick = { props.selectedimage ? props.showdescription : ()=>{}} */
        className="main-container"
        onClick={(e) => {
          if (e.target === e.currentTarget || e.target.classList.contains("image-description")) {
            props.selectedimage ? props.showdescription() : null;
          }
        }}
        onPointerDown={handlePointerDown}   // for the image slider
        onPointerUp={handlePointerUp}  // for the image slider
        onPointerMove={handlePointerMove}  // for the image slider
        >
            {props.selectedimage ? selectimage : null} {/* to display full page image */}
            {
                (props.selectedimage && props.description) ? <p className="image-description">{selecttext}</p> : null /* display image decription */
            }
            {!props.albums ? <a onClick={props.togglealbum} className="album-link">View Albums</a> : null}

            {(props.albums && !props.albumselected) ?
                 <div className="album-tiles-page">
                {albums}
                </div> : null
            }
            
            { props.albumselected ? 
              <div 
              ref = {trackRef}
              className={`album-phototray ${props.selectedimage ? "downtray" : ""}`}
              >
              {phototray}
              </div> : null
            }
        </div>
    )
}