import React from "react";
import Filenav from "./Filenav.js"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import Tabs from "./Tabs.js"
import Console from "./Console.js"
import Codearea from "./Codearea.js"

import Filedata from "./Resumecontent/data.js"   // we have added all out data and even the data about file names and initial state of our applet in data itself so the sake of expandability


export default function app(){
    const [tabs , setTabstate]  = React.useState(Filedata.files)
    const [colors, setColor] = React.useState({
        Aqua: true,
        Red: false,
        Green: false,
        Darkblue: false,
        creamwhite: false
    })
    const [themesOpen , setSection] = React.useState(true)   //we are just using one flip switch to toggle sections if further new sections are to be added need to use a different data structure

    function toggleThememenu(string){

        if(string === "Files"){setSection(false)}
        if(string === "Themes"){setSection(true)}

    }

    function selector(name){

        console.log("selected")

        setTabstate((prevState) => {
            const newTabState = new Map(prevState); // Make a copy
            newTabState.forEach((value, mapKey) => {
                newTabState.set(mapKey, {
                  ...value,
                  selected: mapKey === name, // true for the specified key, false for others
                  onTab : mapKey === name ? true : newTabState.get(mapKey).onTab ,
                });
              });
            return newTabState;
          });
    }

    function removefromTab(name,event){
        event.stopPropagation();
        console.log("removed")

          setTabstate((prevState) => {
            const newTabState = new Map(prevState); // Make a copy
            newTabState.set(name, { ...newTabState.get(name), selected: false, onTab: false });
            return newTabState;
          });
    }

    return(
        <div className="resume-container">
            <Header/>
            <Tabs
                tabState = {tabs}
                removetab = {removefromTab}
                select = {selector}
                /* changetabs = {modify} */
            />

            <Filenav
                tabState = {tabs}  //keeps track of which tabs are open initial data taken from file
                select = {selector}
                colors = {colors}
                colorTab = {themesOpen}
                setTheme ={setColor}
            />
            <Sidebar
                colorTab = {themesOpen}
                changeSection = {toggleThememenu}
            />

            <Codearea
                tabState = {tabs}
               
            />
            <Console/>
        </div>
    )
}