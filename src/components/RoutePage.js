import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { photos16 } from "../photos.js";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function RoutePage() {
    const [index, setIndex] = useState(-1);

    function importAll(r) {
        let audio = {};
        r.keys().map(item => { audio[item.replace('./', '')] = r(item); });
        return audio;
      }
      
    const audio = importAll(require.context('../images', false, /\.mp3/));

    return (
        <div>
            <h1 className="title">Więcej zdjęć</h1>
            <div className="iframe-container2">
                <PhotoAlbum layout="rows" targetRowHeight={300} photos={photos16} onClick={({ index }) => setIndex(index)}/>

                <Lightbox
                slides={photos16}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                />
            </div>
            <div className="audios">
                <AudioPlayer autoPlay={false} src={audio["a_1.mp3"]}/>
                <AudioPlayer autoPlay={false} src={audio["a_2.mp3"]}/>
            </div>
        </div>
    );
}

export default RoutePage;