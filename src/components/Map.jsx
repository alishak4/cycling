import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import './Route.css';

// Call RTL plugin once globally
if (maplibregl.getRTLTextPluginStatus?.() === 'unavailable') {
  maplibregl.setRTLTextPlugin(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js",
    null,
    true
  );
}

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

    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://tiles.stadiamaps.com/styles/stamen_toner.json',
center: [78.3, 30.2] ,
      zoom: 7,
      attributionControl: false
    });

    map.addControl(new maplibregl.NavigationControl());

    map.on('load', () => {
      // Add GeoJSON line source
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: locations.map(l => l.coordinates) 
          }
        }
      });

      // Add line layer to style it
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': 'black',
          'line-width': 4
        }
      });
    });

    return () => map.remove(); // cleanup
  }, []);

  return (
    <div className='map-grid'>
      <div className='map-text'>
        <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
          The total distance we covered was 3200km. We had retraced the route of the Sixth Himalayan Car Rally (1985) on bicycles.
        </p>
        <p style={{ marginBottom: '15px', textAlign: 'justify' }}>
          We travelled through the plains and into the mountains up to a height of 10,300 ft. at the Jalori Pass.
        </p>
        <p style={{ textAlign: 'justify' }}>
          We went through rain, hail and snow and some of the roads which we traversed were so rough that they hadn't seen a bicycle before!
        </p>
      </div>
      <div className='map-projection' id="map" />
    </div>
  );
};

export default Map;
