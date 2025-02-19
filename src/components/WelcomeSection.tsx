import React from 'react';
import styled from 'styled-components';
import Grid from '../components/Grid'; // Import the Grid component
import GridItem from '../components/GridItem'; // Import the GridItem component

/**
 * WelcomeSection component displays a welcoming message
 * with a title, subtitle, buttons, and a row of images.
 */

/**
 * Styled components for layout and appearance of the hero section.
 */
const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; // Full viewport height for hero effect
    min-height: 100vh; // Ensure it fills the viewport even with content
    width: 100%; // Ensure it fills the viewport width
    background-color: #ffffff; // Background color
    text-align: center; // Center text
    padding: 20px; // Add padding for smaller screens

    @media (max-width: 768px) {
        padding: 10px; // Reduce padding on smaller screens
    }
`;

const Title = styled.h1`
    font-size: 3rem; // Larger font size for the title
    color: #333333; // Title color
    margin: 0; // Remove default margin

    @media (max-width: 768px) {
        font-size: 2.5rem; // Adjust font size for smaller screens
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem; // Font size for the subtitle
    color: #666666; // Subtitle color
    margin: 10px 0; // Margin for spacing

    @media (max-width: 768px) {
        font-size: 1.2rem; // Adjust font size for smaller screens
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; // Stack buttons vertically on small screens
    align-items: center; // Center buttons
    gap: 10px; // Space between buttons
    margin: 20px 0; // Space above and below buttons

    @media (min-width: 769px) {
        flex-direction: row; // Align buttons horizontally on larger screens
    }
`;

const ImageRow = styled.div`
    display: flex;
    justify-content: space-between; // Even space on either side
    width: 100%; // Full width for alignment
    max-width: 800px; // Limit the width for better appearance
    flex-wrap: wrap; // Allow images to wrap on smaller screens

    @media (max-width: 768px) {
        justify-content: center; // Center images on smaller screens
    }
`;

const KnotImage = styled.img`
    width: 100px; // Set a larger width for images on mobile
    height: auto; // Maintain aspect ratio

    @media (min-width: 769px) {
        width: 120px; // Set a larger width for images on larger screens
    }
`;

// Update props to include title, subtitle, and knot images
interface WelcomeSectionProps {
    title: string;
    subtitle: string;
    backgroundColor: string;
    children?: React.ReactNode;
    knotImages: string[]; // Array of image URLs
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, subtitle, backgroundColor, knotImages }) => {
    return (
        <SectionContainer style={{ backgroundColor }}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ButtonContainer>
                <button style={{ padding: '15px 20px', backgroundColor: '#D6E9F2', color: '#fff', border: 'none', borderRadius: '50px', width: '100%' }}>Button 1</button>
                <button style={{ padding: '15px 20px', backgroundColor: '#D6E9F2', color: '#fff', border: 'none', borderRadius: '50px', width: '100%' }}>Button 2</button>
            </ButtonContainer>
            <ImageRow>
                {knotImages.map((image, index) => (
                    <KnotImage key={index} src={image} alt={`Knot ${index + 1}`} />
                ))}
            </ImageRow>
        </SectionContainer>
    );
};

export default WelcomeSection; 