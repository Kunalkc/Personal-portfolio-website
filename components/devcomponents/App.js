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
    
    

    const colorMap = new Map([   // just to be passed in state
        ["Aqua", true],
        ["Bloodymary", false],
        ["Thematrix", false],
        ["Thespacedeck", false],
        ["Vanilla", false],
      ]);

      

    const [colors, setColor] = React.useState(colorMap)
    console.log(colors)
    function changeTheme(string){

        setColor(prevState=>{

            const newcolorState = new Map(prevState)
            newcolorState.forEach((value,mapKey)=>{
                newcolorState.set(mapKey,mapKey  === string)
            })

            return newcolorState
        })

    }

    // to apply the change in color
    React.useEffect(() => {

        console.log("i ran bitch")
        if(colors.get("Aqua")) {

            document.documentElement.style.setProperty('--THEME', 'rgb(100, 167, 168)');
            document.documentElement.style.setProperty('--BORDERCOLOR', 'rgb(130, 130, 130)');     
            document.documentElement.style.setProperty('--CODEAREACOLOR', 'rgb(12, 17, 23)');
            document.documentElement.style.setProperty('--SIDEBARCOLOR', 'rgb(37, 37, 38)');
            document.documentElement.style.setProperty('--HEADERCOLOR', 'rgb(34, 31, 31)');
            document.documentElement.style.setProperty('--FILENAVAREACOLOR', 'rgb(30, 30, 30)');
            document.documentElement.style.setProperty('--FONTCOLOR', 'rgb(210, 217, 222)');
            document.documentElement.style.setProperty('--TABBARCOLOR', 'rgb(20, 20, 20)');

        } 
        if(colors.get("Bloodymary")) {

            document.documentElement.style.setProperty('--THEME', 'rgb(168, 110, 100)');
            document.documentElement.style.setProperty('--BORDERCOLOR', 'rgb(130, 130, 130)');
            document.documentElement.style.setProperty('--CODEAREACOLOR', 'rgb(18, 0, 0)');
            document.documentElement.style.setProperty('--SIDEBARCOLOR', 'rgb(49, 26, 9)');
            document.documentElement.style.setProperty('--HEADERCOLOR', 'rgb(36, 17, 17)');
            document.documentElement.style.setProperty('--FILENAVAREACOLOR', 'rgb(9, 6, 22)');
            document.documentElement.style.setProperty('--FONTCOLOR', 'rgb(214, 191, 191)');
            document.documentElement.style.setProperty('--TABBARCOLOR', 'rgb(0, 0, 0)');

        } 
        if(colors.get("Thematrix")) {

            document.documentElement.style.setProperty('--THEME', 'rgb(89, 170, 75)');
            document.documentElement.style.setProperty('--BORDERCOLOR', 'rgb(30, 138, 11)');
            document.documentElement.style.setProperty('--CODEAREACOLOR', 'rgb(0, 6, 0)');
            document.documentElement.style.setProperty('--SIDEBARCOLOR', 'rgb(21, 22, 29)');
            document.documentElement.style.setProperty('--HEADERCOLOR', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--FILENAVAREACOLOR', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--FONTCOLOR', 'rgb(209, 255, 200)');
            document.documentElement.style.setProperty('--TABBARCOLOR', 'rgb(0, 0, 0)');

        } 
        if(colors.get("Thespacedeck")) {

            document.documentElement.style.setProperty('--THEME', 'rgb(45, 40, 97)');
            document.documentElement.style.setProperty('--BORDERCOLOR', 'rgb(130, 130, 130)');
            document.documentElement.style.setProperty('--CODEAREACOLOR', 'rgb(12, 17, 23)');
            document.documentElement.style.setProperty('--SIDEBARCOLOR', 'rgb(37, 37, 38)');
            document.documentElement.style.setProperty('--HEADERCOLOR', 'rgb(34, 31, 31)');
            document.documentElement.style.setProperty('--FILENAVAREACOLOR', 'rgb(30, 30, 30)');
            document.documentElement.style.setProperty('--FONTCOLOR', 'rgb(210, 217, 222)');
            document.documentElement.style.setProperty('--TABBARCOLOR', 'rgb(20, 20, 20)');
        } 
        if(colors.get("Vanilla")) {
            document.documentElement.style.setProperty('--THEME', 'rgb(252, 158, 235)');
            document.documentElement.style.setProperty('--BORDERCOLOR', 'rgb(36, 36, 36)');
            document.documentElement.style.setProperty('--CODEAREACOLOR', 'rgb(242, 209, 252)');
            document.documentElement.style.setProperty('--SIDEBARCOLOR', 'rgb(154, 131, 172)');
            document.documentElement.style.setProperty('--HEADERCOLOR', 'rgb(173, 121, 169)');
            document.documentElement.style.setProperty('--FILENAVAREACOLOR', 'rgb(188, 188, 188)');
            document.documentElement.style.setProperty('--FONTCOLOR', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--TABBARCOLOR', 'rgb(86, 70, 86)');

        } 

    }, [colors]);

    const [themesOpen , setSection] = React.useState(false)   //we are just using one flip switch to toggle sections if further new sections are to be added need to use a different data structure
    function toggleThememenu(string){ // changing the section in filenav 

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
                colorTab = {themesOpen} // to toggle between files and themes
                colors = {colors}
                setTheme ={changeTheme} // change theme
            />
            <Sidebar
                colorTab = {themesOpen} // using if themes is open to determine whether to show files or not works for now
                changeSection = {toggleThememenu} // files to themes switch
            />

            <Codearea
                tabState = {tabs}
               
            />
            <Console/>
        </div>
    )
}