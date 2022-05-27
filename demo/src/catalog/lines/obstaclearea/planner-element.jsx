import {ElementsFactories} from 'react-planner';

const info = {
  title: 'obstacle area',
  tag: ['line'],
  description: 'Use line to draw the obstacle area',
  image: require('./obstaclearea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.LineFactory('obstacle area', info);

