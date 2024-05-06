import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import polyline from '@mapbox/polyline';
import { RoutingApi, CostingModel } from '@stadiamaps/api';

const Map = () => {
    useEffect(() => {
        // Call setRTLTextPlugin only once before creating MapLibre GL JS maps
        maplibregl.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js");

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
                .catch(function(error) {
                    console.error(error);
                });
        };

        // Initialize MapLibre GL map
        const map = new maplibregl.Map({
            container: "map",
            style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json", // Style URL; see our documentation for more options
            center: [12, 53], // Initial focus coordinate
            zoom: 4
        });

        // Add zoom and rotation controls to the map.
        map.addControl(new maplibregl.NavigationControl());

        simple_route(30.10615, 78.29062, 30.16773, 78.42906, CostingModel.Truck, function(response) {
            // Construct a bounding box in the sw, ne format required by MapLibre. Note the lon, lat order.
            var sw = [response.trip.summary.minLon, response.trip.summary.minLat];
            var ne = [response.trip.summary.maxLon, response.trip.summary.maxLat];

            // Zoom to the new bounding box to focus on the route,
            // with a 50px padding around the edges. See https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#fitbounds
            map.fitBounds([sw, ne], {
                padding: 50
            });

            // For each leg of the trip...
            response.trip.legs.forEach(function(leg, idx) {
                // Add a layer with the route polyline as an overlay on the map
                var layerID = "leg-" + idx; // Unique ID with request ID and leg index
                // Note: Our polylines have 6 digits of precision, not 5
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
        <div id="map" style={{ width: "100%", height: "600px" }}></div>
    );
};

export default Map;
