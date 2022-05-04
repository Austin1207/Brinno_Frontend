import React from 'react';
import PropTypes from 'prop-types';
import GridHorizontalStreak from './grid-horizontal-streak';
import GridVerticalStreak from './grid-vertical-streak';
import Visibility_Polygon from '../visibility-polygon';

export default function Grids({scene}) {

  let {width, height, grids} = scene;

  let renderedGrids = grids.entrySeq().map(([gridID, grid]) => {
    switch (grid.type) {
      case 'horizontal-streak':
        return (<GridHorizontalStreak key={gridID} width={width} height={height} grid={grid}/>);

      case 'vertical-streak':
        return (<GridVerticalStreak key={gridID} width={width} height={height} grid={grid}/>);

      default:
        console.warn(`grid ${grid.type} not allowed`);
    }
  }).toList();

  return (<g>{renderedGrids}</g>);
  //return (<Visibility_Polygon sceneWidth={3000} sceneHeight={2000}/>);
}

Grids.propTypes = {
  scene: PropTypes.object.isRequired
};
