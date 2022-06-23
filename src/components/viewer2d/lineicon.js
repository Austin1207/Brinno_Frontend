import React from 'react';
import { createSvgIcon } from '@mui/material/utils';

const IconConstructionLine = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h21" stroke="#222" stroke-width="3" stroke-dasharray="6 6"/>
    </svg>,
    'ConstructionLine',
);
const IconInterestLine = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h21" stroke="#FF8200" stroke-width="3" stroke-dasharray="6 6"/>
    </svg>,
    'InterestLine',
);
const IconObstacleLine = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="#75787B" stroke-width="3"/>
    </svg>,
    'ObstacleLine',
);
const IconNoCamLine = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h21" stroke="#E45D65" stroke-width="3" stroke-dasharray="6 6"/>
    </svg>,
    'NoCamLine',
);
const IconMustLine = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h21" stroke="#8F4900" stroke-width="3" stroke-dasharray="6 6"/>
    </svg>,
    'MustLine',
);

export {IconConstructionLine, IconInterestLine, IconObstacleLine, IconNoCamLine, IconMustLine};