import {ElementsFactories} from 'react-planner';

const info = {
  title: 'mustcover area',
  tag: ['line'],
  description: 'Use line to draw the mustcover area',
  image: require('./mustcoverarea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.TargetFactory('mustcover area', info);

