import React from 'react';
import './App.css';
import TabsWithImage from "./components/TabsWithImage/TabsWithImage";
import {tabsData} from "./data/tabsData";

function App() {
    return (

        <div className="pt-10 justify-center flex flex-col gap-10 m-auto flex items-center">
            <div>TEST APP FOR VADIM</div>
            <TabsWithImage tabsData={tabsData}/>
        </div>
    );
}

export default App;
