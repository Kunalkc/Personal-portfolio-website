import React from "react";
import Header from "./Header"
import Theatre from "./Theatre"


export default function app(){

    const [photos, setphotos] = React.useState(true)

    function toggle(){
        console.log("clicked")
        setphotos(prevstate => { return !prevstate})
    }


    return (
        <div>
            <Header/>
            <Theatre
              photos = {photos}
              toggle = {toggle}
            />
        </div>
    )
}