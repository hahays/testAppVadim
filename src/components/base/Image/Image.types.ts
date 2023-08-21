export interface ImageProps {
    images: {
        os: string;
        url: string;
    }[];
    activeOs: string;
}