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

    function selector(name){

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

    function removefromTab(name){

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
                tabState = {tabs}
                select = {selector}
            />
            <Sidebar/>

            <Codearea
                tabState = {tabs}
               
            />
            <Console/>
        </div>
    )
}