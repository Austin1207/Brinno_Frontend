import {ElementsFactories} from 'react-planner';

const info = {
  title: 'interest area',
  tag: ['line'],
  description: 'Use line to draw the interest area',
  image: require('./interestarea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.LineFactory('interest area', info);

