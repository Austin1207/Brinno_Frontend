import {ElementsFactories} from 'react-planner';

const info = {
  title: 'install area',
  tag: ['line'],
  description: 'Use line to draw the area you want to place carema',
  image: require('./installarea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.LineFactory('install area', info);

