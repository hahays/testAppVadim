import React from 'react';
import {TabProps} from "./Tab.types";
import classNames from "classnames";


const Tab = ({tabData, isActive, os, onClick}: TabProps) => {

    const handleTabClick = () => {
        onClick();
    };
    return (
        <div className="flex">
            <div>
                <div>
                    <button
                        onClick={() => handleTabClick()}
                        className={classNames(isActive ? 'text-sm rounded font-semibold py-1 px-2 select-none text-blue-900 cursor-pointer bg-blue-100 hover:text-blue-900 hover:bg-blue-100' :
                            'font-semibold text-sm py-1 px-2 cursor-pointer hover:rounded hover:text-blue-900 hover:bg-blue-100')}>{tabData?.label} {os}</button>
                </div>

            </div>
        </div>
    );
};

export default Tab;