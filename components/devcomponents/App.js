import React from "react";
import Filenav from "./Filenav.js"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import Tabs from "./Tabs.js"
import Console from "./Console.js"
import Codearea from "./Codearea.js"

export default function app(){
    return(
        <div className="resume-container">
            <Header/>
            <Tabs/>

            <Filenav/>
            <Sidebar/>

            <Codearea/>
            <Console/>
        </div>
    )
}