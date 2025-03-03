import React from "react";
import Header from "./Header"
import Filmtiles from "./Filmtiles"

export default function App(){
    return(
        <div>
           <Header/>
           <main>
             <Filmtiles/>
           </main>
        </div>
    )
}