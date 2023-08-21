import {ImageProps} from "./Image.types";


function Image({images, activeOs}:ImageProps) {

    const activeImage = images.find((image) => image.os === activeOs );

    return (
        <>
            {activeImage && (
                <img
                    src={activeImage.url}
                    alt=""
                    className="block mx-auto mt-4 h-auto"
                />
            )}
        </>
    );
}

export default Image;