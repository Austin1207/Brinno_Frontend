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

  export default function Visibility_Polygon({sceneWidth, sceneHeight}) {
    const polygons = [];
    // this is the 'world' polygon, which bounds all the polygons you want to compute againts
    console.log(sceneWidth, sceneHeight)
    polygons.push([
      [-1, -1],
      [sceneWidth+1, -1],
      [sceneWidth+1, sceneHeight+1],
      [-1, sceneHeight+1],
    ]);
    // define vertexes of your polygons
    polygons.push([
      [250, 100],
      [260, 140],
      [240, 140],
    ]);

    polygons.push([[240,240],[260,240],[260,260],[240,260]]);
     
    const segments = breakIntersections(convertToSegments(polygons));
     
    // define your position in which the visibility should be calculated from
    const position = [100, 200];
     
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
    //console.log(viewportVisibility);
    return(
      <svg>
        <g>
          {<polygon points={viewportVisibility.join()} fill="lime" />}
        </g>
      </svg>
    )
  }