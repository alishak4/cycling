import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import bike from '../images/bike.svg';
import './HomePage.css';

const RouteMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Define the locations
    const locations = [
        { name: 'Delhi', coordinates: [77.2090, 28.6139] }, // Delhi
        { name: 'Panipat', coordinates: [76.9508, 29.3909] }, // Panipat
        { name: 'Haridwar', coordinates: [78.1642, 29.9457] }, // Haridwar
        { name: 'Dakpathar', coordinates: [77.8486, 30.8861] }, // Dakpathar
        { name: 'Mussoorie', coordinates: [78.0665, 30.4591] }, // Mussoorie
        { name: 'Paonta Sahib', coordinates: [77.6174, 30.4361] }, // Paonta Sahib
        { name: 'Nahan', coordinates: [77.2995, 30.5583] }, // Nahan
        { name: 'Solan', coordinates: [77.1150, 30.9066] }, // Solan
        { name: 'Simla', coordinates: [77.1734, 31.1048] }, // Simla
        { name: 'Jalori Pass', coordinates: [77.4850, 31.6969] }, // Jalori Pass
        { name: 'Mandi', coordinates: [76.9264, 31.7771] }, // Mandi
        { name: 'Dehradun', coordinates: [78.0322, 30.3165] }, // Dehradun
        { name: 'Mussorie', coordinates: [78.0648, 30.4591] }, // Mussorie
        { name: 'Tehri', coordinates: [78.4744, 30.3782] }, // Tehri
        { name: 'Chopta', coordinates: [79.3067, 30.4207] }, // Chopta
        { name: 'Karnaprayag', coordinates: [79.2043, 30.2306] }, // Karnaprayag
        { name: 'Raniket', coordinates: [79.4215, 29.6516] }, // Raniket
        { name: 'Almora', coordinates: [79.6617, 29.6116] }, // Almora
        { name: 'Nainital', coordinates: [79.4712, 29.3803] }, // Nainital
        { name: 'Kaladhongi', coordinates: [79.7843, 29.6759] }, // Kaladhongi
        { name: 'Corbett National Park', coordinates: [78.7567, 29.5183] }, // Corbett National Park
        { name: 'Kotdwar', coordinates: [78.5201, 29.7487] }, // Kotdwar
        { name: 'Ghaziabad', coordinates: [77.4538, 28.6692] }, // Ghaziabad
        { name: 'Delhi', coordinates: [77.2090, 28.6139] } // Delhi
      ];

    const svg = d3.select(svgRef.current);

    // Define projection
    const projection = d3.geoMercator()
      .fitSize([1000, 800], { type: "LineString", coordinates: locations.map(d => d.coordinates) });

    // Define path generator
    const pathGenerator = d3.geoPath().projection(projection);

    // Draw route
    svg.append('path')
      .datum({ type: 'LineString', coordinates: locations.map(location => location.coordinates) })
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');

    // Draw locations with labels
    const locationsGroup = svg.selectAll('.location')
      .data(locations)
      .enter()
      .append('g')
      .attr('class', 'location');

    locationsGroup.append('circle')
      .attr('cx', d => projection(d.coordinates)[0])
      .attr('cy', d => projection(d.coordinates)[1])
      .attr('r', 4)
      .attr('fill', 'red');

    locationsGroup.append('text')
      .attr('x', d => projection(d.coordinates)[0] + 6)
      .attr('y', d => projection(d.coordinates)[1] + 4)
      .text(d => d.name);

    // Animate bike
    const bikeNode = svg.append('image')
      .attr('xlink:href', bike)
      .attr('width', 50)
      .attr('height', 50)
      .attr('x', projection(locations[0].coordinates)[0])
      .attr('y', projection(locations[0].coordinates)[1])
      .style('opacity', 0);

    let currentLocationIndex = 0;

    function transitionBike() {
      bikeNode.transition()
        .duration(1500)
        .style('opacity', 1)
        .attr('x', projection(locations[currentLocationIndex].coordinates)[0] - 10)
        .attr('y', projection(locations[currentLocationIndex].coordinates)[1] - 6)
        .on('end', () => {
          currentLocationIndex++;
          if (currentLocationIndex < locations.length) {
            transitionBike();
          }
        });
    }

    transitionBike();
  }, []);

  return (
    <svg ref={svgRef} className="route-map"></svg>
  );
};

export default RouteMap;
