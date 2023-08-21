import {ImageTypes} from "./Image.types";

function Image({ source}:ImageTypes) {
    return (
        <div className="ml-4">
            <img src={source} alt="Selected browser and OS" className="max-w-xs" />
        </div>
    );
}

export default Image;