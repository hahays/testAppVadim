export interface Tab {
    id: string;
    label: string;
    source: string;
}
export interface TabsProps {
    label: string;
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}



