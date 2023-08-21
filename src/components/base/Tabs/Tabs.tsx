import {useEffect, useState} from "react";
import {tabsData} from "../../../data/tabsData";
import Tab from "./Tab/Tab";


function Tabs() {
    const [selectedTabs, setSelectedTabs] = useState(['1', '3']);

    console.log(selectedTabs)

    const handleTabChange = (value: string, index: number) => {
        setSelectedTabs(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    useEffect(() => {
    },[selectedTabs, setSelectedTabs])

    const selectedImage = tabsData.find(image =>
        image.selectedValues.every((value, index) => value === selectedTabs[index])
    );

    return (
        <div className="flex flex-col gap-3 w-[500px]">
        <div className="flex justify-between">
            <Tab
                title="Browser"
                tabs={[
                    { id: '1', label: 'Chrome' },
                    { id: '2', label: 'Firefox' },
                ]}
                selectedTab={selectedTabs[0]}
                onChange={(value) => handleTabChange(value, 0)}
            />
            <Tab
                title="OS"
                tabs={[
                    { id: '1', label: 'Windows' },
                    { id: '2', label: 'MacOS' },
                    { id: '3', label: 'Android' },
                ]}
                selectedTab={selectedTabs[1]}
                onChange={(value) => handleTabChange(value, 1)}
            />
        </div>
            <div className="flex justify-center">
                <img src={selectedImage?.source} alt="Image" />
            </div>
        </div>
    );
}

export default Tabs;