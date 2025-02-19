import React from 'react';
import styled from 'styled-components';

/**
 * IntroSection component displays an introductory section
 * with an image, title, and description, and can include
 * additional content like a grid.
 */

// Styled component for the IntroSection
const SectionContainer = styled.div<{ backgroundColor: string }>`
    display: flex; /* Use flexbox for layout */
    flex-direction: row; /* Default to row for desktop */
    background-color: ${props => props.backgroundColor};
    width: 100%; /* Ensure it takes full width */
    height: 100vh; /* Set height to fill the viewport */
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements vertically on mobile */
        height: auto; /* Allow height to adjust on mobile */
    }
`;

// Styled component for the text section
const TextSection = styled.div`
    flex: 1; /* Take up half of the space */
    display: flex;
    flex-direction: column; /* Stack text vertically */
    justify-content: center; /* Center text vertically */
`;

// Styled component for the text container
const TextContainer = styled.div`
    width: 60%; /* Limit width to 60% for breathing room */
    margin: 0 auto; /* Center the text container horizontally */
    text-align: left;
`;

// Styled component for the image section
const ImageSection = styled.div`
    flex: 1; /* Take up half of the space */
    display: flex;
    justify-content: center;
    align-items: center; /* Center the image */
    width: 100%; /* Full width */
    height: 100%; /* Ensure it takes full height */
`;

// Styled component for the image
const StyledImage = styled.img`
    width: 100%; /* Make the image full width */
    height: 100%; /* Make the image full height */
    object-fit: cover; /* Cover the area while maintaining aspect ratio */
`;

// Props for the IntroSection component
interface IntroSectionProps {
    image: string;
    backgroundColor: string;
    title: string;
    description: string;
    buttonText?: string; // Optional button text
    onButtonClick?: () => void; // Optional button click handler
    children?: React.ReactNode; // Allow children to be passed
}

// Main IntroSection component
const IntroSection: React.FC<IntroSectionProps> = ({ image, backgroundColor, title, description, buttonText, onButtonClick, children }) => {
    return (
        <SectionContainer backgroundColor={backgroundColor}>
            <TextSection>
                <TextContainer>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {buttonText && onButtonClick && (
                        <button onClick={onButtonClick}>{buttonText}</button> // Render button if props are provided
                    )}
                    {children} {/* Render children here */}
                </TextContainer>
            </TextSection>
            <ImageSection>
                <StyledImage src={image} alt={title} />
            </ImageSection>
        </SectionContainer>
    );
};

export default IntroSection; 