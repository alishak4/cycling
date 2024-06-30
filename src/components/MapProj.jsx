import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import bike from '../images/bike.svg';
import './HomePage.css';



const RouteMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Define the locations
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

    const svg = d3.select(svgRef.current);

    // Define projection
    const projection = d3.geoMercator()
      .scale(9000) // Adjust the scale factor as needed
      .fitSize([700, 1000], { type: "LineString", coordinates: locations.map(d => d.coordinates) });

    // Define path generator
    const pathGenerator = d3.geoPath().projection(projection);

    // Initialize path data
    const pathData = { type: 'LineString', coordinates: [] };

    // Draw initial route (only Delhi)
    const mainPath = svg.append('path')
      .datum(pathData)
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');

    // Draw initial location (only Delhi)
    const locationsGroup = svg.selectAll('.location')
      .data([locations[0]])
      .enter()
      .append('g')
      .attr('class', 'location');

    locationsGroup.append('circle')
      .attr('cx', d => projection(d.coordinates)[0])
      .attr('cy', d => projection(d.coordinates)[1])
      .attr('r', 4)
      .attr('fill', 'blue');

    locationsGroup.append('text')
      .attr('x', d => projection(d.coordinates)[0] + 6)
      .attr('y', d => projection(d.coordinates)[1] + 4)
      .text(d => d.name);

    // Draw bike's trail path
    const trailPathData = { type: 'LineString', coordinates: [locations[0].coordinates] };

    const trailPath = svg.append('path')
      .datum(trailPathData)
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round');

    // Animate bike
    const bikeNode = svg.append('image')
      .attr('xlink:href', bike)
      .attr('width', 50)
      .attr('height', 50)
      .attr('x', projection(locations[0].coordinates)[0])
      .attr('y', projection(locations[0].coordinates)[1])
      .style('opacity', 0);

    let currentLocationIndex = 1;

    function transitionBike() {
      if (currentLocationIndex < locations.length) {
        bikeNode.transition()
          .duration(1500)
          .style('opacity', 1)
          .attr('x', projection(locations[currentLocationIndex].coordinates)[0] - 10)
          .attr('y', projection(locations[currentLocationIndex].coordinates)[1] - 6)
          .on('end', () => {
            // Add the new path segment
            pathData.coordinates.push(locations[currentLocationIndex].coordinates);
            mainPath.datum(pathData).attr('d', pathGenerator);

            // Add the new location circle and label
            const newLocationGroup = svg.append('g')
              .attr('class', 'location');

            newLocationGroup.append('circle')
              .attr('cx', projection(locations[currentLocationIndex].coordinates)[0])
              .attr('cy', projection(locations[currentLocationIndex].coordinates)[1])
              .attr('r', 4)
              .attr('fill', 'blue');

            newLocationGroup.append('text')
              .attr('x', projection(locations[currentLocationIndex].coordinates)[0] + 6)
              .attr('y', projection(locations[currentLocationIndex].coordinates)[1] + 4)
              .text(locations[currentLocationIndex].name);

            // Update the trail path
            trailPathData.coordinates.push(locations[currentLocationIndex].coordinates);
            trailPath.datum(trailPathData).attr('d', pathGenerator);

            currentLocationIndex++;
            transitionBike();
          });
      }
    }

    transitionBike();
  }, []);

  return (
    <div className='map-grid'> 
    <svg ref={svgRef} style={{height:'1200px', width:'90%', paddingTop:'20px', paddingLeft:'20px'}}></svg>
    <div> 
    <h1 className='route-text'> Route </h1>
    <p id='text'> We began cycling from Delhi passing through Panipat, Hardwar, Dakpathar, Mussorie, Paonta Sahib, Nahan, Solan and then to Simla.
        <br/> <br/> 
        From Simla we went on to the Jalori pass, Mandi, then back to Simla and then via Dehradun to Mussorie. 
        
        <br/> <br/>
        From Mussorie to Tebri, Chopta, Karnaprayag, Ranikhet, Almora and then to Nainital. We then cycled via Kaladhongi, Corbett National Park,
         Kotdwar, Ghaziabad and returned to Delhi. 
        
        <br/> <br/>
        The total distance we covered was 3200 kms.
March 28th 1986: We encountered our first major climb on this day enroute to Mussorie.
<br/> <br/>
The climb began from Yamuna bridge and it went on and on and on or so it seemed. After every few kms we would stop to regain
<br/>
 our strength and wonder whether the next turn would bring us to the top. But the next turn always brought forth a steeper climb
 <br/> and we called it a never ending story. 
 We were forever climbing the climbing roads but the top remained a distant hope, at times coming into view and at times fading into obivion. We were sweating profusely and <br/> we had a water shortage on the</p>
    </div>
    </div>
  );
};

export default RouteMap;