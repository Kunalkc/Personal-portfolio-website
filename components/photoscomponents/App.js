import React from "react";
import Header from "./Header";
import Photos from "./Photos"

export default function App(){

    const [albums , setalbums] = React.useState(false)
    const [albumselected, selectalbum] = React.useState(0)

    console.log(albums)

    function togglealbum(){
        setalbums((prevstate)=>(!prevstate))
    }

    function handlebackclick(){
        console.log("button clicked")
    }


    return(
        <div>
        <img  onClick= {handlebackclick} className="back-button" src="components\photoscomponents\content\img\backbutton.png" width={50} height={30}></img>
        <Header/>
        <Photos
            albums = {albums}
            togglealbum = {togglealbum}
            albumselected = {albumselected}
            albumselector = {selectalbum}
        />
        </div>
    )
}