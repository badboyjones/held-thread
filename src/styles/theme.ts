/**
 * This file defines the global theme for the application using Styled Components.
 * It includes color definitions and typography settings to ensure consistency across the app.
 */

import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        warmRed: '#FFD6D6',
        peach: '#FFE6D5',
        warmYellow: '#FFF3D6',
        sage: '#E6EDD5',
        sky: '#D6E9F2',
        lavender: '#E6D6F2',
        softPink: '#F4B5D9',
        plum: '#A06B8F',
        white: '#FFFFFF',
        black: '#333333',
    },
    typography: {
        fontFamily: "'Arial', sans-serif",
        fontSize: '16px',
    },
};

export default theme; 