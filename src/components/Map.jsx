import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import polyline from '@mapbox/polyline';
import { RoutingApi, CostingModel } from '@stadiamaps/api';
import './HomePage.css';

if (!maplibregl.rtlTextPluginUrl) {
    maplibregl.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js");
}
const Map = () => {
    useEffect(() => {
        const simple_route = (startLat, startLon, endLat, endLon, costing, callback) => {
            const api = new RoutingApi();

            // Build a request body for the route request
            const req = {
                locations: [{
                    lat: startLat,
                    lon: startLon,
                    type: "break"
                },
                {
                    lat: endLat,
                    lon: endLon,
                    type: "break"
                }
                ],
                "costing": costing,
            };

            api.route({ routeRequest: req })
                .then(callback)
                .catch(function (error) {
                    console.error(error);
                });
        };

        const map = new maplibregl.Map({
            container: "map",
            style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json", // Style URL; see our documentation for more options
            center: [77.1025, 28.7041], // Initial focus coordinate
            zoom: 4
        });

        map.addControl(new maplibregl.NavigationControl());

        simple_route(30.10615, 78.29062, 30.16773, 78.42906, CostingModel.Truck, function (response) {
            var sw = [response.trip.summary.minLon, response.trip.summary.minLat];
            var ne = [response.trip.summary.maxLon, response.trip.summary.maxLat];

            // Zoom to the new bounding box to focus on the route,
            // with a 50px padding around the edges. See https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#fitbounds
            map.fitBounds([sw, ne], {
                padding: 50
            });

            // For each leg of the trip...
            response.trip.legs.forEach(function (leg, idx) {
                var layerID = "leg-" + idx; 
                var geometry = polyline.toGeoJSON(leg.shape, 6);
                map.addLayer({
                    "id": layerID,
                    "type": "line",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": geometry
                        }
                    },
                    "layout": {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    "paint": {
                        "line-color": "#0072ce",
                        "line-opacity": 0.3,
                        "line-width": 5
                    }
                });
            });
        });

        // Clean up function
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className='map-grid'>
            <div id="map" style={{ width: "600px", height: "800px" }}></div>
            <div className='map-text'>
                <h1> Map</h1>
                <p>
                    On March 20th, 1986, we set out on a mission to know our Himalayas. But our expedition was different. We conquered no peaks, except those of Pain, Defeat and Fatigue. 
                    <br/> <br/>
            
            We retraced the route of the Sixth Himalayan Car Rally (1985) on BICYCLES. It was a 3200 km odyssey which took us over every road surface known to man. The route offered a height variation that was phenomenal. 
            <br/> <br/>
            We travelled through the plains and into the mountains upto a height of 10,300 ft. at the Jalori Pass. We went through rain, hail and snow and some of the roads which we traversed were so rough that they hadn't seen a bicycle before!</p>
            </div>
        </div>
    );
};

export default Map;
