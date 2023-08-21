export interface TabData {
    label?: string;
    images: {
        os: string
        url: string;
    }[];
}

export interface TabProps {
    tabData?: TabData
    os?: string
    isActive?: boolean;
    onClick: () => void;

}

