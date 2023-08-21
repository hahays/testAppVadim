import React from 'react';
import {TabsProps} from "./Tabs.types";
import classNames from "classnames";

const Tabs = ({children, title, className}: TabsProps) => {
    return (
        <div>
            <h2 className="pb-2">{title}</h2>
            <div
                className={classNames('flex flex inline-flex flex items-center gap-1 p-1 border border-zinc-300 border-solid rounded-md w-fit', className)}>
                {children}
            </div>
        </div>


    );
};

export default Tabs;