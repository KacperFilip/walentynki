import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { photos16 } from "../photos.js";

function RoutePage() {
    const [index, setIndex] = useState(-1);
    return (
        <div>
            <h1 className="title">Więcej zdjęć</h1>
            <div className="iframe-container2">
                <PhotoAlbum layout="columns" targetRowHeight={150} photos={photos16} onClick={({ index }) => setIndex(index)}/>

                <Lightbox
                slides={photos16}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                />
            </div>
        </div>
    );
}

export default RoutePage;