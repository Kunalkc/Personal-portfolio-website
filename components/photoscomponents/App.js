import React from "react";
import Header from "./Header";
import Photos from "./Photos"

export default function App(){

    const [albums , setalbums] = React.useState(false)
    const [albumselected, selectalbum] = React.useState(0)

    const [selectedimage , selectimage] = React.useState(0)
    const [description , toggle] = React.useState(0)

    function showdescription(){

        console.log("showdescription called")
        if(description){
            toggle(0)
        }else{
            toggle(1)
        }
    }

    console.log(selectedimage)

    function togglealbum(){
        setalbums((prevstate)=>(!prevstate))
    }

    function handlebackclick(){
        if(selectedimage){
            selectimage(0)
             return
        }
        if(albumselected){ selectalbum(0) }
        if(albums && !albumselected) {setalbums(false)}
    }

    function imageselector(number){
        selectimage(number)
    }

    return(
        <div>
       { albums  && <img  onClick= {handlebackclick} className="back-button" src="components\photoscomponents\content\img\backbutton.png" width={50} height={30}></img>}
        <Header/>
        <Photos
            albums = {albums}
            togglealbum = {togglealbum}
            albumselected = {albumselected}
            albumselector = {selectalbum}
            selectedimage = {selectedimage}
            selectimage = {imageselector}
            description = {description}
            showdescription = {showdescription}
        />
        </div>
    )
}