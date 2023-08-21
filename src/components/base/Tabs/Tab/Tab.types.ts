 export interface TabTypes {
    selectedTab?: string;
    onChange: (value: string) => void;
    title: string;
    tabs: { id: string; label: string }[];
}

