import React from 'react';
import styled from 'styled-components';

/**
 * IntroSection component displays a welcoming introduction
 * alongside an image, creating a visually appealing layout.
 */
interface IntroSectionProps {
    image: string;
    backgroundColor: string;
    title: string;
    description: string;
}

const Container = styled.section<{ backgroundColor: string }>`
    display: flex;
    flex-direction: row; /* Default to row for desktop */
    align-items: center;
    justify-content: space-between;
    width: 100%; /* Full width of the viewport */
    padding: 0; /* Remove padding to allow full height */
    background-color: ${props => props.backgroundColor}; /* Set background color */

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically on mobile */
    }
`;

const TextSection = styled.div`
    flex: 1; /* Take up half of the space */
    padding: 20px;
    color: #333333; /* Dark text */
    text-align: center; /* Center text */
`;

const ImageSection = styled.div`
    flex: 1; /* Take up half of the space */
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image */
    width: 100%; /* Full width */
`;

const StyledImage = styled.img`
    width: 100%; /* Make the image full width */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Cover the area while maintaining aspect ratio */
`;

const IntroSection: React.FC<IntroSectionProps> = ({ image, backgroundColor, title, description }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <TextSection>
                <h1>{title}</h1>
                <p>{description}</p>
            </TextSection>
            <ImageSection>
                <StyledImage src={image} alt="Craft materials" />
            </ImageSection>
        </Container>
    );
};

export default IntroSection; 