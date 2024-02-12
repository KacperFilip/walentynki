import { useParams } from "react-router-dom";
import timelineElements from "../timelineElements.js";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Iframe from 'react-iframe';


function Wspomnienie() {
    const API_KEY = "AIzaSyAxnnVtUtw8tvuZg28S9VHTsmJ89ai1byk";
    const params = useParams();
    const element = timelineElements[params.wspomnieniaId-1];
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
                <Iframe url={`https://drive.google.com/embeddedfolderview?id=${element.imagesId}#grid`} className="iframe-image"/>
            </div>
            </div>
        </div>
    );
}

export default Wspomnienie;