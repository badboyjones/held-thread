import React from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../constants/images';

const ImageColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;

    @media (max-width: 768px) {
        position: static;
        margin-bottom: 1rem;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    transform: rotate(5deg);
    max-height: 80vh;

    @media (max-width: 768px) {
        max-height: 50vh;
        transform: none;
    }
`;

/**
 * ImageSection component displays the main collage image
 * with responsive behavior and styling.
 */
const ImageSection: React.FC = () => {
    return (
        <ImageColumn role="complementary" aria-label="Teacher Morrissey's Photo Collage">
            <Image 
                src={IMAGES.CARDS.ABOUT_COLLAGE}
                alt="Photo collage showing childhood sewing memories, family moments, and crafting materials" 
            />
        </ImageColumn>
    );
};

export default ImageSection; 