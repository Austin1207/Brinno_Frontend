import {ElementsFactories} from 'react-planner';

const info = {
  title: 'construction area',
  tag: ['line'],
  description: 'Use line to draw the construction area',
  image: require('./constructionarea.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

export default ElementsFactories.TargetFactory('construction area', info);

