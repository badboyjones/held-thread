/**
 * StarDivider component provides a decorative star separator between sections
 * Used across multiple pages for consistent visual rhythm
 */

import React from 'react';
import styled from 'styled-components';
import { IMAGES } from '../constants/images';
interface DividerContainerProps {
    height?: string;
}

const DividerContainer = styled.div<DividerContainerProps>`
    width: 100%;
    height: ${props => props.height || '100px'};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 100;
`;

const DividerImage = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 75%;  // Stars take up more width on mobile
    }

    @media (max-width: 480px) {
        width: 90%;  // Even wider on very small screens
    }
`;

interface StarDividerProps {
    height?: string;
}

const StarDivider: React.FC<StarDividerProps> = ({ height }) => (
    <DividerContainer height={height}>
        <DividerImage
            src={IMAGES.CARDS.TRANSPARENT_STARS}
            alt="Glittery stars serving as a divider between sections of text."
        />
    </DividerContainer>
);

export default StarDivider; 