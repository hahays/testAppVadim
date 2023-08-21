import {useState} from "react";
import {TabsWithImageProps} from "./TabsWithImage.types";
import Image from "../base/Image/Image";
import Tab from "../base/Tab/Tab";
import Tabs from "../base/Tabs/Tabs";

function TabsWithImage({tabsData}: TabsWithImageProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [activeOs, setActiveOs] = useState("Android");
    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };
    const handleOsChange = (os: string) => {
        setActiveOs(os);
    };

    return (
        <div className="flex flex-col w-[400px]">
            <div className="flex gap-3">
                <div className="">

                    <Tabs title="Браузер">
                        {tabsData.map((tabData, index) => (
                            <Tab
                                key={tabData.label}
                                tabData={tabData}
                                isActive={activeTab === index}
                                onClick={() => handleTabChange(index)}
                            />
                        ))}
                    </Tabs>

                </div>
                <div className="">
                    <Tabs title="ОС"> {activeTab !== tabsData.length && tabsData[activeTab].images.map((image) => (
                        <Tab key={image.os} onClick={() => handleOsChange(image.os)} isActive={activeOs === image.os}
                             os={image.os}/>
                    ))} </Tabs>

                </div>
            </div>
            {activeTab !== tabsData.length && (
                <Image
                    images={tabsData[activeTab].images}
                    activeOs={activeOs}
                />
            )}
        </div>

    );
}

export default TabsWithImage;
