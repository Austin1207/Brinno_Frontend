import {ElementsFactories} from 'react-planner';

const info = {
  title: 'target',
  tag: ['line'],
  description: 'Use line to draw the target area',
  image: require('./target.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.TargetFactory('target', info);

