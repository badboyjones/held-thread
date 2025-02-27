/**
 * Styled components for the WaveDivider component.
 * Handles visual styling and SVG wave pattern.
 */
import styled from 'styled-components';

export const WaveContainer = styled.div<{ backgroundColor: string }>`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    overflow: hidden;
    position: relative;
    height: 100px;
`;

export const Wave = styled.svg<{ waveColor: string }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: ${props => props.waveColor};
`; 