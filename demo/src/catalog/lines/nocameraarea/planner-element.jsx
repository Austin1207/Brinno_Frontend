import {ElementsFactories} from 'react-planner';

const info = {
  title: 'nocamera area',
  tag: ['line'],
  description: 'Use line to draw the nocamera area',
  image: require('./nocameraarea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.TargetFactory('nocamera area', info);

