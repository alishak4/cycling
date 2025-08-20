import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import polyline from '@mapbox/polyline';
import { RoutingApi, CostingModel } from '@stadiamaps/api';
import './HomePage.css';

// Call setRTLTextPlugin only once when the component is imported
maplibregl.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js");

const Map = () => {
    useEffect(() => {
        const locations = [
            { name: 'Delhi', coordinates: [77.2090, 28.6139] },
            { name: 'Panipat', coordinates: [76.9508, 29.3909] },
            { name: 'Haridwar', coordinates: [78.1642, 29.9457] },
            { name: 'Dakpathar', coordinates: [77.8486, 30.8861] },
            { name: 'Mussoorie', coordinates: [78.0665, 30.4591] },
            { name: 'Paonta Sahib', coordinates: [77.6174, 30.4361] },
            { name: 'Nahan', coordinates: [77.2995, 30.5583] },
            { name: 'Solan', coordinates: [77.1150, 30.9066] },
            { name: 'Simla', coordinates: [77.1734, 31.1048] },
            { name: 'Jalori Pass', coordinates: [77.4850, 31.6969] },
            { name: 'Mandi', coordinates: [76.9264, 31.7771] },
            { name: 'Dehradun', coordinates: [78.0322, 30.3165] },
            { name: 'Mussorie', coordinates: [78.0648, 30.4591] },
            { name: 'Tehri', coordinates: [78.4744, 30.3782] },
            { name: 'Chopta', coordinates: [79.3067, 30.4207] },
            { name: 'Karnaprayag', coordinates: [79.2043, 30.2306] },
            { name: 'Raniket', coordinates: [79.4215, 29.6516] },
            { name: 'Almora', coordinates: [79.6617, 29.6116] },
            { name: 'Nainital', coordinates: [79.4712, 29.3803] },
            { name: 'Kaladhongi', coordinates: [79.7843, 29.6759] },
            { name: 'Corbett National Park', coordinates: [78.7567, 29.5183] },
            { name: 'Kotdwar', coordinates: [78.5201, 29.7487] },
            { name: 'Ghaziabad', coordinates: [77.4538, 28.6692] },
            { name: 'Delhi', coordinates: [77.2090, 28.6139] }
        ];

        const multi_point_route = (locations, costing, callback) => {
            const api = new RoutingApi();

            const req = {
                locations: locations.map(loc => ({
                    lat: loc.coordinates[1],
                    lon: loc.coordinates[0],
                    type: "break"
                })),
                costing: costing
            };

            api.route({ routeRequest: req })
                .then(callback)
                .catch(function (error) {
                    console.error(error);
                });
        };

        // Initialize MapLibre GL map
        const map = new maplibregl.Map({
            container: "map",
            style: "https://tiles.stadiamaps.com/styles/stamen_toner.json",
            center: [77.1025, 28.7041],
            zoom: 5
        });

        // Add zoom and rotation controls to the map.
        map.addControl(new maplibregl.NavigationControl());

        map.addControl(new maplibregl.NavigationControl());

        multi_point_route(locations, CostingModel.Bicycle, function (response) {
            const sw = [response.trip.summary.minLon, response.trip.summary.minLat];
            const ne = [response.trip.summary.maxLon, response.trip.summary.maxLat];

            map.fitBounds([sw, ne], { padding: 50 });

            response.trip.legs.forEach((leg, idx) => {
                const geometry = polyline.toGeoJSON(leg.shape, 6);
                map.addLayer({
                    id: "leg-" + idx,
                    type: "line",
                    source: {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: geometry
                        }
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint: {
                        "line-color": "#0072ce",
                        "line-opacity": 0.7,
                        "line-width": 4
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
