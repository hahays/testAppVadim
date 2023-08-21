import React from 'react';
import {TabTypes} from "./Tab.types";
import classNames from "classnames";


const Tab = ({selectedTab, onChange, title, tabs}:TabTypes) => {
    return (
        <div className="">
            <h2>{title}</h2>
            <div className="inline-flex items-center gap-1 p-1 border border-zinc-300 border-solid rounded-md">
                {tabs.map((tab) => (
                    <div key={tab.id}>
                        <button
                            className=""
                            id={tab.id}
                            value={tab.id}
                            type="button"
                            key={tab.id}
                            onClick={() => onChange(tab.id)}
                            onChange={() => onChange(tab.id)}
                        />
                        <label className={classNames(selectedTab === tab.id  ? 'rounded py-1 px-2 select-none text-blue-900 cursor-pointer bg-blue-100 hover:text-blue-900 hover:bg-blue-100': 'py-1 px-2 cursor-pointer hover:text-blue-900 hover:bg-blue-100')} htmlFor={tab.id}>{tab.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tab;