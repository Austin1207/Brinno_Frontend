import React from 'react';
import {
    breakIntersections,
    convertToSegments,
    compute,
    computeViewport,
    inPolygon,
    Position,
    Polygon,
  } from 'visibility-polygon';

  export default function Visibility_Polygon() {
    const polygons = [];
    // this is the 'world' polygon, which bounds all the polygons you want to compute againts
    polygons.push([
      [-1, -1],
      [501, -1],
      [501, 501],
      [-1, 501],
    ]);
    // define vertexes of your polygons
    polygons.push([
      [250, 100],
      [260, 140],
      [240, 140],
    ]);
     
    const segments = breakIntersections(convertToSegments(polygons));
     
    // define your position in which the visibility should be calculated from
    const position = [60, 60];
     
    // check if the position is inside the world polygon
    if (inPolygon(position, polygons[0])) {
      // compute the visibility polygon, this can be used to draw a polygon with Canvas or WebGL
      const visibility = compute(position, segments);
    }
    const viewportVisibility = computeViewport(
      position,
      segments,
      [50, 50],
      [450, 450]
    );
    console.log(viewportVisibility);
    return(
      <svg>
        <polygon points="200,10 250,190 160,210" style="fill:lime"/>
      </svg>
    )
  }