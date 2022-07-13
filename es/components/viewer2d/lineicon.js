import React from 'react';
import { createSvgIcon } from '@mui/material/utils';

var IconConstructionLine = createSvgIcon(React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 12h21', stroke: '#222', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'ConstructionLine');
var IconInterestLine = createSvgIcon(React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 12h21', stroke: '#FF8200', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'InterestLine');
var IconObstacleLine = createSvgIcon(React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 12h18', stroke: '#75787B', 'stroke-width': '3' })
), 'ObstacleLine');
var IconNoCamLine = createSvgIcon(React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 12h21', stroke: '#E45D65', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'NoCamLine');
var IconMustLine = createSvgIcon(React.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', { d: 'M3 12h21', stroke: '#8F4900', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'MustLine');

export { IconConstructionLine, IconInterestLine, IconObstacleLine, IconNoCamLine, IconMustLine };