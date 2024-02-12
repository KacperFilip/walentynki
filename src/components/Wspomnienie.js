import { useParams } from "react-router-dom";
import timelineElements from "../timelineElements.js";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import {photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9, photos10, photos11, photos12, photos13} from "../photos.js";
import { useState } from "react";

function Wspomnienie() {
    const API_KEY = "AIzaSyAxnnVtUtw8tvuZg28S9VHTsmJ89ai1byk";
    const params = useParams();
    const element = timelineElements[params.wspomnieniaId-1];

    const [index, setIndex] = useState(-1);
    
    const usePhotos = [photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9, photos10, photos11, photos12, photos13]

    return (
        <div className="flex-memory">
            <h1 className="title-memory">{element.title}</h1>
            <div className="flex-content">
            <div className="map-container">
                <div className="map">
                    <APIProvider apiKey={API_KEY}>
                        <Map
                            defaultCenter={{lat: element.lat, lng: element.lng}}
                            defaultZoom={element.zoom}
                            gestureHandling={'none'}
                            disableDefaultUI={true}
                            mapId={'739af084373f96fe'}
                        >
                            <Marker position={{lat: element.lat, lng: element.lng}}/>
                        </Map>
                    </APIProvider>
                </div>
            </div>
            <div className="iframe-container">
                <PhotoAlbum layout="columns" targetRowHeight={150} photos={usePhotos[element.id - 1]} onClick={({ index }) => setIndex(index)}/>

                <Lightbox
                slides={usePhotos[element.id - 1]}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                />
            </div>
            </div>
        </div>
    );
}

export default Wspomnienie;