import React from "react";
import Filenav from "./Filenav.js"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import Tabs from "./Tabs.js"
import Console from "./Console.js"
import Codearea from "./Codearea.js"

import Filedata from "./Resumecontent/data.js"   // we have added all out data and even the data about file names and initial state of our applet in data itself so the sake of expandability

console.log(Filedata.files)

export default function app(){
    const [tabs , setTabstate]  = React.useState(Filedata.files)

    function modify(){
        
    }

    return(
        <div className="resume-container">
            <Header/>
            <Tabs
                tabState = {tabs}
            />

            <Filenav
                tabState = {tabs}
            />
            <Sidebar/>

            <Codearea
                tabState = {tabs}
            />
            <Console/>
        </div>
    )
}