// RouteMap.js
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import * as d3 from 'd3';
import bike from '../images/bike.svg';
import './Route.css';
export const RouteMap = forwardRef((props, ref) => {
  const svgRef = useRef();
  const locations = useRef([]);
  const started = useRef(false);

  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      if (!started.current) {
        started.current = true;
        drawMap();
      }
    }
  }));

  function drawMap() {
    const locs = [
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
    locations.current = locs;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // clear previous runs

    const svgEl = svgRef.current;
    const width = svgEl.clientWidth;
    const height = svgEl.clientHeight;
    
    const projection = d3.geoMercator()
      .scale(9000)
      .fitExtent([[20, 20], [width - 20, height - 20]], { type: "LineString", coordinates: locs.map(d => d.coordinates) });

    const pathGenerator = d3.geoPath().projection(projection);
    const pathData = { type: 'LineString', coordinates: [] };

    // Red main path
    const mainPath = svg.append('path')
      .datum(pathData)
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 2);

    // Blue trail path
    const trailPathData = { type: 'LineString', coordinates: [locs[0].coordinates] };
    const trailPath = svg.append('path')
      .datum(trailPathData)
      .attr('d', pathGenerator)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 2);

    // Bike node
    const bikeNode = svg.append('image')
      .attr('xlink:href', bike)
      .attr('width', 30)
      .attr('height', 30)
      .attr('x', projection(locs[0].coordinates)[0])
      .attr('y', projection(locs[0].coordinates)[1])
      .style('opacity', 0);

    let currentLocationIndex = 0;

    // Function to reveal label at a location
    function showLabel(loc) {
      const [x, y] = projection(loc.coordinates);
      const g = svg.append('g').attr('class', 'location');

      g.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 4)
        .attr('fill', 'red');

      g.append('text')
        .attr('x', x + 6)
        .attr('y', y + 4)
        .text(loc.name)
        .attr('font-size', '12px')
        .attr('fill', 'black')
        .style('opacity', 0)
        .transition()
        .duration(500)
        .style('opacity', 1);
    }

    // Show starting label immediately
    showLabel(locs[0]);

    function transitionBike() {
      if (currentLocationIndex < locs.length - 1) {
        const nextLoc = locs[currentLocationIndex + 1];
        bikeNode.transition()
          .duration(1500)
          .style('opacity', 1)
          .attr('x', projection(nextLoc.coordinates)[0] - 10)
          .attr('y', projection(nextLoc.coordinates)[1] - 6)
          .on('end', () => {
            pathData.coordinates.push(nextLoc.coordinates);
            mainPath.datum(pathData).attr('d', pathGenerator);

            trailPathData.coordinates.push(nextLoc.coordinates);
            trailPath.datum(trailPathData).attr('d', pathGenerator);

            showLabel(nextLoc); // reveal label when bike arrives

            currentLocationIndex++;
            transitionBike();
          });
      }
    }

    transitionBike();
  }

  return (
    <section className="route-section route-step" data-step="route">
      <div className="route-grid">
        <div className="route-text">
          <h1 className="route">THE ROUTE</h1>
          <p className="route-info">
            We began cycling from Delhi passing through Panipat, Haridwar,
            Dakpathar, Mussoorie, Paonta Sahib, Nahan, Solan and then to Simla.
          </p>

          <p className="route-info">
            From Simla we went on to Jalori Pass, Mandi, then back to Simla and then via Dehradun to Mussorie. <br />
          </p>

          <p className="route-info">
            From Mussorie to Tehri, Chopta, Karnaprayag, Raniket, Almora and then to Nainital. We then cycled via Kaladhongi, Corbett National Park, Kotdwar, Ghaziabad and returned to Delhi
          </p>
        </div>
        <div className="route-svg">
          <svg
            ref={svgRef}
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", display: "block", minHeight: '700px' }}
          ></svg>
        </div>
      </div>

    </section>
  );
});

export default RouteMap;
